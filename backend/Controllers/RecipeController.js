const Recipe = require("../Models/RecipeModel");

// Controller function to retrieve recipes by country
const getRecipesByCountry = async (req, res) => {
  const { countryId } = req.params;

  try {
    // Query the database to find recipes with a specific country
    const recipes = await Recipe.find({ country: countryId });

    // Render the view with the retrieved recipes
    res.render('recipes', { recipes });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving recipes');
  }
};

// Controller function to add a new recipe
const addRecipe = async (req, res) => {
  const { title, description, ingredients, countryId } = req.body;

  try {
    // Create a new recipe object
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      country: countryId,
    });

    // Save the recipe to the database
    await newRecipe.save();

    res.redirect(`/countries/${countryId}/recipes`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding recipe');
  }
};

// Controller function to delete a recipe
const deleteRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    // Delete the recipe from the database
    await Recipe.findByIdAndDelete(recipeId);

    res.redirect('/countries');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting recipe');
  }
};

module.exports = {
  getRecipesByCountry,
  addRecipe,
  deleteRecipe,
};
