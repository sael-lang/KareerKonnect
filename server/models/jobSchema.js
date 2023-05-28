const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  postedOn: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  companyUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },

});

const job = new mongoose.model("job", jobSchema);

module.exports = job;
