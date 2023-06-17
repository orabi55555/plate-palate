const Recipe = require("../Models/RecipeModel");
const Country = require("../Models/CountryModel");

class RecipeController {
  // Controller function to retrieve recipes by country
async getAllRecipes(req, res) {
    const { countryId } = req.params;
  
    try {
      // Check if the country exists in the database
      const country = await Country.findById(countryId);
      if (!country) {
        return res.status(404).json({ message: 'Country not found' });
      }
  
      // Retrieve the recipes for the specified country
      const recipes = await Recipe.find({ country: countryId });
  
      if (recipes.length === 0) {
        return res.status(200).json({
          message: 'No recipes found for this country',
        });
      }
  
      res.status(200).json({
        message: 'Recipes retrieved successfully',
        recipes: recipes,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  

  // Controller function to add a new recipe
  async addRecipe(req, res) {
    const { title, recipe_image, preparationTime, cookingTime, ingredients, instructions, countryId } = req.body;

    try {
      const newRecipe = new Recipe({
        title,
        recipe_image,
        preparationTime,
        cookingTime,
        ingredients,
        instructions,
        country: countryId,
      });

      console.log(newRecipe);
      // Save the recipe to the database
      const createdRecipe = await newRecipe.save();
      

      res.status(201).json({
        message: 'Recipe created successfully',
        recipe: createdRecipe,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Controller function to delete a recipe
  async deleteRecipe(req, res) {
    const { recipeId } = req.params;

    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

      if (!deletedRecipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }

      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RecipeController();
