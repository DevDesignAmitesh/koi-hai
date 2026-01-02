import WebSocket, { WebSocketServer } from "ws";
import { prisma } from "@repo/db/db";
import { verifyToken } from "@repo/types/types";

const PORT = Number(process.env.PORT!);

const server = new WebSocketServer({ port: PORT });

interface User {
  ws: WebSocket;
  userId: string;
  pairId: string;
}

const users: User[] = [];

interface extra extends WebSocket {
  userId: string;
}

server.on("connection", (ws: extra, req) => {
  console.log("connected");

  const token = req.url?.split("?")[1]?.split("=")[1];

  if (!token) {
    ws.close();
    return;
  }

  const userId = verifyToken({ token }).userId;

  if (!userId) {
    ws.close();
    return;
  }

  ws.userId = userId;

  ws.on("message", async (data) => {
    const parsedData = JSON.parse(data.toString());

    console.log("recevied data");
    console.log(parsedData);

    if (parsedData.type === "JOIN") {
      const { pairId } = parsedData;
      const isPairIdValid = await pairIdValidator({ userId, pairId });

      if (!isPairIdValid) {
        ws.close();
        return;
      }

      users.push({
        ws,
        userId,
        pairId,
      });

      return;
    }

    if (parsedData.type === "CHAT") {
      const { message, pairId } = parsedData;
      const isPairIdValid = await pairIdValidator({ userId, pairId });

      if (!isPairIdValid) {
        ws.close();
        return;
      }

      const partnerId = await findOtherPartner({ pairId, userId });

      if (!partnerId) {
        ws.close();
        return;
      }

      const partner = users.find((usr) => usr.userId === partnerId);

      if (!partner) {
        ws.close();
        return;
      }

      partner.ws.send(
        JSON.stringify({
          type: parsedData.type,
          message,
        })
      );

      return;
    }
  });

  ws.on("close", () => {});

  ws.on("error", (err) => console.log(err));
});

const pairIdValidator = async ({
  userId,
  pairId,
}: {
  userId: string;
  pairId: string;
}) => {
  const pair = await prisma.pair.findFirst({
    where: {
      id: pairId,
    },
  });

  if (!pair) {
    return false;
  }

  if (pair.firstPartnerId !== userId && pair.secondPartnerId !== userId) {
    return false;
  }

  return true;
};

const findOtherPartner = async ({
  userId,
  pairId,
}: {
  userId: string;
  pairId: string;
}) => {
  const pair = await prisma.pair.findFirst({
    where: {
      id: pairId,
    },
  });

  if (!pair) {
    return null;
  }

  if (pair.firstPartnerId === userId) {
    return pair.secondPartnerId;
  }
  if (pair.secondPartnerId === userId) {
    return pair.firstPartnerId;
  }

  return null;
};
