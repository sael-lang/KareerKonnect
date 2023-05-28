const mongoose = require("mongoose");

const Logins = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
});

const Login = new mongoose.model("Login", Logins);

module.exports = Login;
