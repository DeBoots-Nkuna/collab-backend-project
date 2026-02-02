const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

// POST new event
router.post("/", async (req, res) => {
  const newEvent = await Event.create(req.body);
  res.json(newEvent);
});

module.exports = router;
