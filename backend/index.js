// const mongoose = require('mongoose');
// const User = require('./models/UserModel');
// // assuming your model file is named "user.js"
// mongoose.set('strictQuery', false)
// const uri = 'mongodb://127.0.0.1:27017/platepalate';
// const DB_URL = process.env.DATABASE_URL;



// // Connect to the MongoDB database using Mongoose
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');

//   // Create a new user instance
//   const user = new User({
//     user_name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: 'password123',
//     gender: 'male',
//     role: 'buyer',
//     mobile: '1234567890',
//     address: '123 Main St',
//   });

//   // Save the user instance to the MongoDB database
//   user.save().then(() => {
//     console.log('User saved to MongoDB:', user.toJSON());
//     mongoose.disconnect();
//   }).catch((err) => {
//     console.error('Could not save user to MongoDB', err);
//     mongoose.disconnect();
//   });
// }).catch((err) => {
//   console.error('Could not connect to MongoDB', err);
// });

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// // Set the URI for your MongoDB database
// const uri = 'mongodb://127.0.0.1:27017/myapp';

// // Connect to the MongoDB database using Mongoose
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');

//   // Start the Express server and listen on the specified port
//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }).catch((err) => {
//   console.error('Could not connect to MongoDB', err);

