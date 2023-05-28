const mongoose = require("mongoose");

const JobSeekerSchema = new mongoose.Schema({
  JbSeekName: {
    type: String,
    required: true,
  },
  JbSeekEmail: {
    type: String,
    required: true,
    unique: true,
  },
  JbSeekField: {
    type: String,
    required: true,
  },
  JbSeekExperience: {
    type: String,
    required: true,
  },
  JbSeekUniversityName: {
    type: String,
    required: true,
  },
  data: Buffer,
  contentType: String,
});

const JobSeeker = new mongoose.model("JobSeeker", JobSeekerSchema);

module.exports = JobSeeker;
