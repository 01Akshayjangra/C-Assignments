const Topic = require("../models/topics.model");

// Get all topics
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new topic
exports.createTopic = async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

