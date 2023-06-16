const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({

  title: { 
    type: String
    , required: [true,"Title is required more than 3 characters and less than 50"] 
    , minlength: 3,
     maxlength: 50 
    },


  summary: { 
    type: String, 
    required: [true,"Summary is required more than 3 characters and less than 50"], 
    minlength: 3,
     maxlength: 50
     },


  image: {
     type: String,
    },
  category: 
  { type: String
    , required: [true,"Category is required more than 3 characters and less than 50"]
   },
  price: { 
    type: Number,
     required: [true,"price is required "] },

});

module.exports = mongoose.model("Food", FoodSchema);