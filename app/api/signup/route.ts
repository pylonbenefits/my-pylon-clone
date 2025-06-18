import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Avoid multiple PrismaClient instances in dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface SignupRequestBody {
  name?: string;
  email: string;
  password: string;
  account: string;
}

export async function POST(request: NextRequest) {
  let body: SignupRequestBody;

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { message: "Expected application/json" },
      { status: 400 }
    );
  }

  try {
    body = await request.json();
  } catch (error) {
    console.error("Failed to parse JSON body:", error);
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, email, password, account } = body;

  if (!email || !password || !account) {
    return NextResponse.json(
      { message: "Missing required fields: email, password, or account" },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email is already in use" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name?.trim() === "" ? null : name,
        email,
        password: hashedPassword,
        account,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: user.id,
        redirect: "/logindashboard", // 👈 redirect path returned to frontend
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    if (process.env.NODE_ENV === "production") {
      await prisma.$disconnect();
    }
  }
}
