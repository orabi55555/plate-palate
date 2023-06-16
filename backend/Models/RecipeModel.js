const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      recipe_image: {
        type: String,
        required: false
      },
      preparationTime: {
        type: String,
        required: true
      },
      cookingTime: {
        type: String,
        required: true
      },
      // servings: {
      //   type: Number,
      //   required: true
      // },
      ingredients: {
        type: String,
        required: true
      },
      instructions: {
        type: String,
        required: true
      },
      country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true,
      },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
