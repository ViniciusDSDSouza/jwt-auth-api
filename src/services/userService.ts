import { prisma } from "../db/client";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get users");
  }
};
