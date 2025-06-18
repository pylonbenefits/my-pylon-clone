import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hash("password123", 10);

  await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
      password: hashedPassword,
      account: "test",
    },
  });

  console.log("✅ Test user seeded");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding test user:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
