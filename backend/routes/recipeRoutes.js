const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');

router.post('/', RecipeController.createRecipe);
router.get('/', RecipeController.getAllRecipes);
router.get('/:id', RecipeController.getRecipeById);
router.put('/:id', RecipeController.updateRecipeById);
router.delete('/:id', RecipeController.deleteRecipeById);

module.exports = router;
