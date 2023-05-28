const mongoose = require("mongoose");

const appliedads = new mongoose.Schema({
  JbSeekName: {
    type: String,
    required: true,
  },
  job:{
    type: String,
  },
  JbSeekEmail: {
    type: String,
    required: true,
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

const appliedad = new mongoose.model("appliedads", appliedads);

module.exports = appliedad;
