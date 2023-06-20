const Recipe = require("../Models/RecipeModel");
const Country = require("../Models/CountryModel");

class RecipeController {

// Controller function to get a specific recipe
async getRecipe(req, res) {
  const { recipeId } = req.params;

  try {

    console.log('Recipe ID:', recipeId);
    // Find the recipe by ID
    const recipe = await Recipe.findById(recipeId);
    console.log('Recipe:', recipe);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({
      message: 'Recipe retrieved successfully',
      recipe: recipe,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

  
  // Controller function to retrieve recipes by country
// async getAllRecipes(req, res) {
//     const { countryId } = req.params;
  
//     try {
//       console.log('Country ID:', countryId);
//       // Check if the country exists in the database
//       const country = await Country.findById(countryId);
//       // console.log(countryId);
//       if (!country) {
//         return res.status(404).json({ message: 'Country not found' });
//       }
  
//       // Retrieve the recipes for the specified country
//       const recipes = await Recipe.find({ country: countryId });
//       // console.log(recipes);
//       console.log('Recipes:', recipes);
  
//       if (recipes.length === 0) {
//         return res.status(200).json({
//           message: 'No recipes found for this country',
//         });
//       }
  
//       res.status(200).json({
//         message: 'Recipes retrieved successfully',
//         recipes: recipes,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
  
  

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
  // async getAllRecipe(req, res) {
  //   Recipe.find({})
  //     .then(recipes => {
  //       res.json(recipes);
  //     })
  //     .catch(err => {
  //       return res.status(500).json({ message: err.message });
  //     });

  // async getAllRecipe(req, res) {
  //   try {
  //     const recipes = await Recipe.find({});
  //     res.json(recipes);
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
  // }

  //get all recipes
  async getAllRecipe(req, res) {
    try {
      // Find all recipes where country is not a valid ObjectId
      const invalidRecipes = await Recipe.find({ country: { $not: { $type: 7 } } });
      for (const recipe of invalidRecipes) {
        const country = await Country.findOne({ name: recipe.country });
        if (country) {
          recipe.country = country._id;
          await recipe.save();
          console.log(`Updated recipe ${recipe.title} (${recipe._id})`);
        } else {
          console.log(`Could not find country ${recipe.country} for recipe ${recipe.title} (${recipe._id})`);
        }
      }
  
      // Get all recipes (including updated ones)
      const recipes = await Recipe.find({});
      res.json(recipes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }



  //update recipe by id
  //update
  async updateRecipeById(req, res) {
  try {
    const { title, preparationTime, recipe_image, cookingTime} = req.body;
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, preparationTime, recipe_image, cookingTime },
      { new: true }
    );
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe item not found' });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
  };

// }

module.exports = new RecipeController();
