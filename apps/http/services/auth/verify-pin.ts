import type { Request, Response } from "express";
import { compareValue, responsePlate } from "../../utils";
import { pinSchema, zodErrorMessage } from "@repo/types/types";
import { prisma } from "@repo/db/db";

export const verifyPinService = async (req: Request, res: Response) => {
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

    const exitingUser = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!exitingUser) {
      return responsePlate({
        res,
        message: "User not found",
        status: 404,
      });
    }

    if (!exitingUser.pin) {
      return responsePlate({
        res,
        message: "Kindly set pin first",
        status: 404,
      });
    }

    const hashedPin = await compareValue({
      newVal: pin,
      oldVal: exitingUser.pin,
    });

    if (!hashedPin) {
      return responsePlate({
        res,
        message: "GOTCHA",
        status: 200,
      });
    }

    return responsePlate({
      res,
      message: "Pin verified",
      status: 200,
    });
  } catch (e) {
    return responsePlate({
      res,
      message: "Internal server error",
      status: 500,
    });
  }
};
