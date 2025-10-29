import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController";

export const authRoutes = Router();

authRoutes.post("/login", loginController);
authRoutes.post("/register", registerController);
