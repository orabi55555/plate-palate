const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/RecipeController');

// Route to get a specific recipe
router.get('/:recipeId', recipeController.getRecipe);

// Route to display all recipes for a specific country
// router.get('/:countryId/recipes', recipeController.getAllRecipes);

// Route to add a new recipe
router.post('/create', recipeController.addRecipe);

// Route to delete a recipe
router.delete('/:recipeId', recipeController.deleteRecipe);
// Route to get a recipe
// router.get('/recipes', recipeController.getAllRecipe);
router.get('/', recipeController.getAllRecipe);
// Route to update a recipe
router.put('/update/:id', recipeController.updateRecipeById);


module.exports = router;
