const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({

  title: { 
    type: String
    , required: [true,"Title is required "] 
    
    },


  summary: { 
    type: String, 
    required: [true, "summary is required"]

     },


  image: {
     type: String,
    },
  category: 
  { type: String
    , required: [true,"Category is required "]
   },
  price: { 
    type: Number,
     required: [true,"price is required "] },

});

module.exports = mongoose.model("Food", FoodSchema);