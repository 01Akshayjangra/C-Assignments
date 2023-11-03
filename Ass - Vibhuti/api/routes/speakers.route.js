const express = require("express");
const speakerRouter = express.Router();
const speakerController = require("../controllers/speakers.controller");

// Get all speakers
speakerRouter.get("/", speakerController.getAllSpeakers);

// Create a new speaker
speakerRouter.post("/", speakerController.createSpeaker);

module.exports = speakerRouter;
