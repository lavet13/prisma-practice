import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function main() {
  try {
    // queries
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });

    console.dir({ allUsers }, { depth: null });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
