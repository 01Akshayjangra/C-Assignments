const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

// routes
const topicsRouter = require("./routes/topics.route");
const coursesRouter = require("./routes/courses.route");
const speakerRouter = require("./routes/speakers.route");

app.use("/topics", topicsRouter);
app.use("/courses", coursesRouter);
app.use("/speakers", speakerRouter);

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
