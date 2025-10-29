import { Router } from "express";
import { getAllUsersController } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const userRoutes = Router();

userRoutes.get("/users", authMiddleware, getAllUsersController);
