import { Router } from "express";
import { createPairService } from "../services/auth/create-pair";
import { pairingService } from "../services/auth/pairing";
import { createPinService } from "../services/auth/create-pin";
import { verifyPinService } from "../services/auth/verify-pin";
import { commonMiddleware } from "../middleware/common";

export const authRouter = Router();

authRouter.post("/create-pair", createPairService);

authRouter.post("/pairing", pairingService);

authRouter.post("/create-pin", commonMiddleware, createPinService);

authRouter.post("/verify-pin", commonMiddleware, verifyPinService);
