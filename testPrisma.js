const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const sermons = await prisma.sermon.findMany();
  console.log(sermons);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
