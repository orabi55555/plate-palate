const Country = require('../Models/CountryModel');
const Recipe = require('../Models/RecipeModel');
class CountryController {

  async getCountryWithRecipes(req, res) {
    const { countryId } = req.params;

    try {
      console.log('Country ID:', countryId);
      const country = await Country.findById(countryId);
      if (!country) {
        return res.status(404).json({ message: 'Country not found' });
      }


      const recipes = await Recipe.find({ country: countryId });
      console.log(recipes);
      res.status(200).json({ country, recipes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
 
// Controller function to get a specific country
  async getCountry(req, res) {
    const { countryId } = req.params;
  
    try {
      // Find the country by its ID
      console.log('Country ID:', countryId);
      const country = await Country.findById(countryId);
      // console.log('Country:', country);
  
      if (!country) {
        console.log('Country not found');
        return res.status(404).json({ message: 'Country not found' });
      }
  
      console.log('Country found:', country);
      res.status(200).json({ country });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  // Controller function to get all countries
  async getAllCountries(req, res) {
    try {
      const countries = await Country.find();
      console.log(countries);
  
      res.status(200).json({
        message: 'Countries retrieved successfully',
        countries: countries,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllRecipes(req, res) {
    const { countryId } = req.params;
  
    try {
      console.log('Country ID:', countryId);
      // Check if the country exists in the database
      const country = await Country.findById(countryId);
      // console.log(countryId);
      if (!country) {
        return res.status(404).json({ message: 'Country not found' });
      }
  
      // Retrieve the recipes for the specified country
      const recipes = await Recipe.find({ country: countryId });
      // console.log(recipes);
      console.log('Recipes:', recipes);
  
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
   
   // get all countries for Dashboard
    async getCountries (req, res) {
      Country.find()
        .then(countries => {
          res.json(countries);
        })
        .catch(err => {
          return res.status(500).json({ message: err.message });
        });
    };

    async addCountry(req, res) {
      const { name, country_image } = req.body;
    
      try {
        const newCountry = new Country({ name, country_image });
    
        // Save the country to the database
        const createdCountry = await newCountry.save();
    
        // Send the response to the client
        res.status(201).json({
          message: 'Country created successfully',
          country: createdCountry,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
    
  // Controller function to delete a country
  async deleteCountry(req, res) {
    const { countryId } = req.params;
  
    try {
      // Delete the country from the database
      const deletedCountry = await Country.findByIdAndDelete(countryId);
  
      if (!deletedCountry) {
        return res.status(404).json({ message: 'Country not found' });
      }
  
      res.status(200).json({ message: 'Country deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting country');
    }
  }

  //Search
  async getCountryByName (req, res) {
  const name = req.params.name;
  console.log(name);

  Country.find({ name: name })
    .then(countries => {
      res.json(countries);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};
  
}

module.exports = new CountryController();
