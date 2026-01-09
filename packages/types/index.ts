import z, { ZodError } from "zod";
import { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const zodErrorMessage = ({ error }: { error: ZodError }) => {
  return error.issues
    .map((er) => `${er.path.join(".")}: ${er.message}`)
    .join(", ");
};

export const createPairSchema = z.object({
  yourNickName: z.string().min(3, "your nick name is too short"),
  partnersNickName: z.string().min(3, "partner's nick name is too short"),
  phrase: z.string().min(3, "phrase is too short"),
});

export interface CreatePairProps {
  yourNickName: string;
  partnersNickName: string;
  phrase: string;
}

export interface PairingProps {
  yourNickName: string;
  phrase: string;
}

export interface PinProps {
  pin: string;
}

export interface CreatePinProps {
  pin: string;
  confirmedPin: string;
}

export interface Notify {
  success: (input: string) => void;
  error: (input: string) => void;
}

// will be used for login | complete-pair
export const pairingSchema = z.object({
  phrase: z.string().min(3, "phrase is too short"),
  yourNickName: z.string().min(3, "your nick name is too short"),
});

export const pinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be a 6-digit number"),
});

export const createPinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be a 6-digit number"),
  confirmedPin: z.string().regex(/^\d{6}$/, "PIN must be a 6-digit number"),
});

export const verifyToken = ({
  token,
}: {
  token: string;
}): { userId: string } => {
  return verify(token, JWT_SECRET) as { userId: string };
};
