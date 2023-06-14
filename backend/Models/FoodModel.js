const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({

  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  summary: { type: String, required: true, minlength: 3, maxlength: 50 },
  image: { type: String, },
  category: { type: String, required: true },
  price: { type: Number, required: true },

});

module.exports = mongoose.model("Food", FoodSchema);