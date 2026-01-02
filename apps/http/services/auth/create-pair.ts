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
      await prisma.pair.create({
        data: {
          phrase,
          status: "COMPLETED",
          firstPartnerId: userOne.id,
          secondPartnerId: userTwo.id,
        },
      });
    });

    return responsePlate({
      res,
      status: 201,
      message: "User and pair created successfully",
      data: {
        phrase,
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
