import { Router } from "express";
import { getAllUsersController } from "../controllers/userController";

const router = Router();

router.get("/users", getAllUsersController);

export default router;
