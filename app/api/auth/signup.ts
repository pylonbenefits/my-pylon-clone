import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password, account } = req.body;

  if (!email || !password || !account) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Prisma expects `name` to be string or null since it is nullable
    // Ensure to pass null explicitly if empty string

    const user = await prisma.user.create({
      data: {
        name: name?.trim() === "" ? null : name,
        email,
        password: hashedPassword,
        account,
      },
    });

    return res.status(201).json({ message: "User created", userId: user.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
