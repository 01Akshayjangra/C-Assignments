const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Speaker", speakerSchema);
