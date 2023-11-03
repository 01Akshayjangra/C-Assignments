const express = require("express");
const topicsRouter = express.Router();
const {
  getAllTopics,
  createTopic,
} = require("../controllers/topics.controller");

// Get all topics
topicsRouter.get("/", getAllTopics);

// Create a new topic
topicsRouter.post("/", createTopic);

module.exports = topicsRouter;
