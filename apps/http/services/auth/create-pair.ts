import type { Request, Response } from "express";
import { responsePlate } from "../../utils";
import { createPairSchema, zodErrorMessage } from "@repo/types/types";
import { prisma } from "@repo/db/db";

export const createPairService = async (req: Request, res: Response) => {
  try {
    const { success, data, error } = createPairSchema.safeParse(req.body);

    if (!success) {
      return responsePlate({
        res,
        message: zodErrorMessage({ error }),
        status: 411,
      });
    }

    const { partnersNickName, phrase, yourNickName } = data;

    const [existingUser, existingPartner, existingPair] = await Promise.all([
      prisma.user.findFirst({
        where: {
          name: yourNickName,
        },
      }),
      prisma.user.findFirst({
        where: {
          name: partnersNickName,
        },
      }),
      prisma.pair.findFirst({
        where: {
          phrase,
        },
      }),
    ]);

    if (existingUser) {
      return responsePlate({
        res,
        message: yourNickName + " is already taken",
        status: 403,
      });
    }

    if (existingPartner) {
      return responsePlate({
        res,
        message: partnersNickName + " is already taken",
        status: 403,
      });
    }

    if (existingPair) {
      return responsePlate({
        res,
        message: phrase + " is already taken",
        status: 403,
      });
    }

    await prisma.$transaction(async (tx) => {
      const userOne = await tx.user.create({
        data: {
          name: yourNickName,
        },
      });
      const userTwo = await tx.user.create({
        data: {
          name: partnersNickName,
        },
      });
      await tx.pair.create({
        data: {
          phrase,
          status: "SINGLE",
          firstPartnerId: userOne.id,
          secondPartnerId: userTwo.id,
        },
      });
    });

    return responsePlate({
      res,
      status: 201,
      message: "Users and pair created successfully",
      data: {
        phrase,
      },
    });
  } catch (e) {
    console.log("error in create pair ", e);
    return responsePlate({
      res,
      message: "Internal server error",
      status: 500,
    });
  }
};
