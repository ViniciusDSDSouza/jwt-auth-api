import { prisma } from "../db/client";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const login = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user.id);
    return { token, user };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login");
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to register");
  }
};
