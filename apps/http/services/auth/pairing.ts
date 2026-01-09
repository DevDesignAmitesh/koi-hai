import type { Request, Response } from "express";
import { generateToken, responsePlate } from "../../utils";
import { pairingSchema, zodErrorMessage } from "@repo/types/types";
import { prisma } from "@repo/db/db";

export const pairingService = async (req: Request, res: Response) => {
  try {
    const { success, data, error } = pairingSchema.safeParse(req.body);

    if (!success) {
      return responsePlate({
        res,
        message: zodErrorMessage({ error }),
        status: 411,
      });
    }

    const { phrase, yourNickName } = data;

    const existingUser = await prisma.user.findFirst({
      where: {
        name: yourNickName,
      },
    });

    if (!existingUser) {
      return responsePlate({
        res,
        message: "User not found",
        status: 404,
      });
    }

    const existingPair = await prisma.pair.findFirst({
      where: {
        phrase,
        OR: [
          { firstPartnerId: existingUser.id },
          { secondPartnerId: existingUser.id },
        ],
      },
    });

    if (!existingPair) {
      return responsePlate({
        res,
        message: "Pair not found",
        status: 404,
      });
    }

    await prisma.pair.update({
      where: {
        id: existingPair.id,
      },
      data: {
        status: "COMPLETED",
      },
    });

    const token = generateToken({ userId: existingUser.id });

    return responsePlate({
      res,
      status: 201,
      message: "Pair completed successfully",
      data: {
        token,
        redirectUrl: existingUser.pin ? "/pin-verify" : "/pin-setup",
      },
    });
  } catch (e) {
    return responsePlate({
      res,
      message: "Internal server error",
      status: 500,
    });
  }
};
