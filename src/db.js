const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL, // ✅ explicitly pass the URL
});

module.exports = prisma;
