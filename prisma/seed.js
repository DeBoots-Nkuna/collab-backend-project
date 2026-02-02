const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  const audioBuffer = fs.readFileSync("public/audio/faith-community.mp3");

  await prisma.sermon.create({
    data: {
      title: "Faith and Community",
      preacher: "Pastor John",
      date: new Date("2024-09-15"),
      duration: 35,
      tags: ["faith", "community"],
      audioData: audioBuffer,
      transcript: "This sermon explores how faith grows in community...",
    },
  });
}

main()
  .then(() => console.log("Seeded audio sermon"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
