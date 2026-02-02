const sequelize = require("./db");
const Event = require("./models/Event");
const Sermon = require("./models/Sermon");
const Worship = require("./models/Worship");

async function seed() {
  try {
    // Sync models (drop tables if exist, then recreate)
    await sequelize.sync({ force: true });

    // Seed Worship
    await Worship.bulkCreate([
      {
        title: "Sunday Worship",
        description:
          "We gather every Sunday to glorify God through music, prayer, and fellowship.",
        videoUrl: "https://example.com/videos/sunday.mp4",
      },
      {
        title: "Midweek Praise",
        description: "A time of reflection and praise during the week.",
        videoUrl: "https://example.com/videos/midweek.mp4",
      },
    ]);

    // Seed Events
    await Event.bulkCreate([
      { name: "Sunday Service", date: "2026-02-01" },
      { name: "Youth Fellowship", date: "2026-02-05" },
      { name: "Bible Study", date: "2026-02-08" },
    ]);

    // Seed Sermons
    await Sermon.bulkCreate([
      { title: "Faith and Hope", preacher: "Pastor John" },
      { title: "Walking in Love", preacher: "Pastor Mary" },
      { title: "Strength in Trials", preacher: "Pastor David" },
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();
