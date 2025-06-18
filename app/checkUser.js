const { PrismaClient } = require('@prisma/client');
require('dotenv').config(); // Load environment variables from .env

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: 'test@example.com' },
  });

  if (user) {
    console.log('✅ Test user found:');
    console.log(user);
  } else {
    console.log('❌ Test user not found.');
  }
}

main()
  .catch((e) => {
    console.error('Error checking user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
