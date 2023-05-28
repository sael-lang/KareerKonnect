const mongoose = require("mongoose");

const appliedjob = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
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

const appliedjobs = new mongoose.model("appliedjob", appliedjob);

module.exports = appliedjobs;
