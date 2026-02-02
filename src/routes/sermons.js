const express = require("express");
const prisma = require("../db");
const router = express.Router();

// List all sermons
router.get("/", async (req, res) => {
  const sermons = await prisma.sermon.findMany();
  res.json(sermons);
});

// Stream audio
router.get("/:id/audio", async (req, res) => {
  const sermon = await prisma.sermon.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!sermon?.audioData) return res.status(404).send("Audio not found");

  res.setHeader("Content-Type", "audio/mpeg");
  res.send(sermon.audioData);
});

module.exports = router;
