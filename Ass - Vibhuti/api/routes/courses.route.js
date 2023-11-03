const express = require("express");
const courseRouter = express.Router();
const courseController = require("../controllers/courses.controller");

// Get all courses
courseRouter.get("/getall", courseController.getAllCourses);

// Create a new course
courseRouter.post("/", courseController.createCourse);

// Get a course by ID
courseRouter.get("/", courseController.getCoursesWithFilterAndSort);

module.exports = courseRouter;
