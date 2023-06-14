const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      preparationTime: {
        type: String,
        required: true
      },
      cookingTime: {
        type: String,
        required: true
      },
      servings: {
        type: Number,
        required: true
      },
      ingredients: {
        type: [String],
        required: true
      },
      instructions: {
        type: [String],
        required: true
      }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
