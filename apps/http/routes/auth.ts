import { Router } from "express";
import { createPairService } from "../services/auth/create-pair";
import { pairingService } from "../services/auth/pairing";
import { middleware } from "../middleware";
import { createPinService } from "../services/auth/create-pin";
import { verifyPinService } from "../services/auth/verify-pin";

export const authRouter = Router();

authRouter.post("/create-pair", createPairService);

// type => login | complete-pair
authRouter.post("/pairing/:type", pairingService);

authRouter.post("/create-pin", middleware, createPinService);

authRouter.post("/verify-pin", middleware, verifyPinService);
