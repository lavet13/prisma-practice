import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function main() {
  try {
    const prevAllUsers  = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });

    console.dir({ prevAllUsers }, { depth: null });

    const post = await prisma.post.update({
      where: {
        id: 1,
      },
      data: {
        published: true,
      },
    });

    console.log({ post });

    // queries
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });

    console.dir({ allUsers }, { depth: null });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
