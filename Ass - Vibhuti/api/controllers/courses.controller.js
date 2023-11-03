const Course = require("../models/courses.model");

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("topic");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// // Get courses with filtering and sorting
exports.getCoursesWithFilterAndSort = async (req, res) => {
  try {
    const { topicName, priceRange, sortBy } = req.query;

    const query = {};

    if (topicName) {
      query["topic"] = topicName;
    }

    if (priceRange === "Less Than ₹299") {
      query.priceRange = {$lte: 299 };
    } else if (priceRange === "₹300 - ₹899") {
      query.priceRange = { $gte: 300, $lte: 899 };
    } else if (priceRange === "More than ₹900") {
      query.priceRange = { $gte: 900 };
    }

    let sortCriteria = { createdOn: -1 }; 
    if (sortBy === "oldest") {
      sortCriteria = { createdOn: 1 };
    } else if (sortBy === "newest") {
      sortCriteria = { createdOn: -1 };
    }

    const courses = await Course.find(query)
      .populate("topic") 
      .sort(sortCriteria);

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
