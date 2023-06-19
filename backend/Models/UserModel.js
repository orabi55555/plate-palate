const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  otp: {
    type: String,
    required: false,
    minlength: 6,
    maxlength: 6
  },
  user_image: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false,
    enum: ['male', 'female']
  },
  role: {
    type: String,
    required: false,
    enum: ['user', 'admin'],
    default: 'user'
  },
  mobile: {
    type: String,
    required: false,
    minlength: 10,
    maxlength: 10
  },
  address: {
    type: String,
    required: false
  },
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;


// Connect to DB

  // const userSchema = new Schema({
  //   user_name: {
  //     type: String,
  //     required: true,
  //     minlength: 3,
  //     maxlength: 50
  //   },
  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     minlength: 5,
  //     maxlength: 255
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //     minlength: 8,
  //     maxlength: 1024
  //   },
  //   otp: {
  //     type: String,
  //     required: true,
  //     minlength: 6,
  //     maxlength: 6
  //   },
  //   user_image: {
  //     type: String,
  //     required: false
  //   },
  //   gender: {
  //     type: String,
  //     required: true,
  //     enum: ['male', 'female']
  //   },
  //   role: {
  //     type: String,
  //     required: true,
  //     enum: ['user', 'admin'],
  //     default: 'user'
  //   },
  //   mobile: {
  //     type: String,
  //     required: true,
  //     minlength: 10,
  //     maxlength: 10
  //   },
  //   address: {
  //     type: String,
  //     required: false
  //   }
  // });
  
  // const User = mongoose.model('users', userSchema);
  
  // module.exports = User;