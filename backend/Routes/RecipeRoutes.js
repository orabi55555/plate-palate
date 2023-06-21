const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/RecipeController');
const Country = require('../Models/CountryModel');
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
// get all countries for dashboard
router.get('/countries', recipeController.getAllCountries);
// router.get('/countries', (req, res) => {
//     Country.find({}, (err, countries) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send('Error retrieving countries from database');
//       } else {
//         res.json({ countries });
//       }
//     });
//   });
  

//search
router.get('/title/:title', recipeController.getRecioeByTitle);
//get by id
router.get('/get/:id', recipeController.getRecipeById);

module.exports = router;
