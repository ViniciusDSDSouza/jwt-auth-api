import { Request, Response } from "express";
import { login, register } from "../services/authService";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await register(name, email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
