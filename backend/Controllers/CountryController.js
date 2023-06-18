const Country = require('../Models/CountryModel');
class CountryController {
 
  // Controller function to get all countries
  async getAllCountries(req, res) {
    try {
      const countries = await Country.find();
  
      res.status(200).json({
        message: 'Countries retrieved successfully',
        countries: countries,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

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
  
}

module.exports = new CountryController();
