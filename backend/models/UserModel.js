const mongoose = require("mongoose");
// var valid = require("validator");
// const autoIncrement = require("mongoose-auto-increment");
const dotenv = require("dotenv").config();

// Connect to DB


var userSchema = new mongoose.Schema({
  user_name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true,unique: true}, 
  
  password: { type: String, minlength: 6, required: true },
  otp: { type: String, required: false },
  user_image: { type: String },
  gender: { type: String, enum: ["male", "female"], required: true },
  role: { type: String, enum: ["admin", "seller", "buyer"], required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("users", userSchema);