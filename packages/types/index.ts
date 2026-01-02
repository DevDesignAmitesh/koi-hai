import z, { ZodError } from "zod";

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

// will be used for login, complete-pair
export const pairingSchema = z.object({
  phrase: z.string().min(3, "phrase is too short"),
  yourNickName: z.string().min(3, "your nick name is too short"),
  type: z.enum(["login", "complete-pair"]),
});

export const pinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be a 6-digit number"),
});
