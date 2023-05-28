const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  field: {
    type: String,
    required: true,
  },
  studyLevel: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  data: Buffer,
  contentType: String,
});

const students = new mongoose.model("students", studentsSchema);

module.exports = students;
