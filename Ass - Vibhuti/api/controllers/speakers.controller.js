const Speaker = require("../models/speakers.model");

// Get all speakers
exports.getAllSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find();
    res.json(speakers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new speaker
exports.createSpeaker = async (req, res) => {
  try {
    const newSpeaker = new Speaker(req.body);
    await newSpeaker.save();
    res.status(201).json(newSpeaker);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

