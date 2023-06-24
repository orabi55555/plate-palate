const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
      },
      recipe_image: {
        type: String,
        required: false
      },
      preparationTime: {
        type: String,
        required: false
      },
      cookingTime: {
        type: String,
        required: false
      },
      // servings: {
      //   type: Number,
      //   required: true
      // },
      ingredients: {
        type: String,
        required: false
      },
      instructions: {
        type: String,
        required: false
      },
      country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true,
      },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
