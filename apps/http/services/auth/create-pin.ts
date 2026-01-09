import type { Request, Response } from "express";
import { hashValue, responsePlate } from "../../utils";
import { createPinSchema, zodErrorMessage } from "@repo/types/types";
import { prisma } from "@repo/db/db";

export const createPinService = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { success, data, error } = createPinSchema.safeParse(req.body);

    if (!success) {
      return responsePlate({
        res,
        message: zodErrorMessage({ error }),
        status: 411,
      });
    }

    const { pin, confirmedPin } = data;

    if (pin.trim() !== confirmedPin.trim()) {
      return responsePlate({
        res,
        message: "BOTH PINS are not equal/same",
        status: 400,
      });
    }

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
