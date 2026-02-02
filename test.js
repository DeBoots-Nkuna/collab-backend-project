const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  // Fetch the first sermon
  const sermon = await prisma.sermon.findFirst();

  if (!sermon) {
    console.log("No sermons found in the database.");
    return;
  }

  console.log("Sermon details:");
  console.log(`Title: ${sermon.title}`);
  console.log(`Preacher: ${sermon.preacher}`);
  console.log(`Date: ${sermon.date}`);

  // Save audioData back to a file to confirm it works
  if (sermon.audioData) {
    fs.writeFileSync("output.mp3", sermon.audioData);
    console.log("Audio file written to output.mp3");
  } else {
    console.log("No audio data found for this sermon.");
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
