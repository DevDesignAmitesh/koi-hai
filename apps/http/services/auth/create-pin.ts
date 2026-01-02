import type { Request, Response } from "express";
import { hashValue, responsePlate } from "../../utils";
import { pinSchema, zodErrorMessage } from "@repo/types/types";
import { prisma } from "@repo/db/db";

export const createPinService = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { success, data, error } = pinSchema.safeParse(req.body);

    if (!success) {
      return responsePlate({
        res,
        message: zodErrorMessage({ error }),
        status: 411,
      });
    }

    const { pin } = data;

    const hashedPin = await hashValue({ input: pin });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        pin: hashedPin,
      },
    });

    return responsePlate({
      res,
      message: "Pin created successfully",
      status: 201,
    });
  } catch (e) {
    return responsePlate({
      res,
      message: "Internal server error",
      status: 500,
    });
  }
};
