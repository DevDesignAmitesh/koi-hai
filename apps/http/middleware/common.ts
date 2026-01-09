import type { NextFunction, Request, Response } from "express";
import { responsePlate } from "../utils";
import { verifyToken } from "@repo/types/types";

export const commonMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return responsePlate({
        res,
        message: "Un-authorized",
        status: 401,
      });
    }

    const decoded = verifyToken({ token });

    if (!decoded.userId) {
      return responsePlate({
        res,
        message: "Un-authorized",
        status: 401,
      });
    }

    req.userId = decoded.userId;
    next();
  } catch (e) {
    console.log("error in common middleware ", e);

    return responsePlate({
      res,
      message: "Un-authorized",
      status: 401,
    });
  }
};
