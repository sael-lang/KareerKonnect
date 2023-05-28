const mongoose = require("mongoose");

const Researcher = new mongoose.Schema({
    FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Domain: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  Years: {
    type: String,
    required: true,
  },
  University: {
    type: String,
    required: true,
  },
});

const Researchers = new mongoose.model("Researcher", Researcher);

module.exports = Researchers;
