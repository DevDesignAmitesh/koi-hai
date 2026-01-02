import type { Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET env not found");
}

export const responsePlate = ({
  res,
  message,
  status,
  data,
}: {
  res: Response;
  message: string;
  status: number;
  data?: any;
}) => {
  return res.status(status).json({
    message,
    data,
  });
};

export const generateToken = ({ userId }: { userId: string }) => {
  const HOUR = 2;

  return sign({ userId }, JWT_SECRET, {
    expiresIn: HOUR * 60 * 60 * 1000,
  });
};

export const verifyToken = ({
  token,
}: {
  token: string;
}): { userId: string } => {
  return verify(token, JWT_SECRET) as { userId: string };
};

export const hashValue = async ({ input }: { input: string }) => {
  return await hash(input, 4);
};

export const compareValue = async ({
  newVal,
  oldVal,
}: {
  newVal: string;
  oldVal: string;
}) => {
  return await compare(newVal, oldVal);
};
