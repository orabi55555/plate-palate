const Country = require('../Models/CountryModel');

class CountryController {
  // Controller function to get all countries
  async getAllCountries(req, res) {
    try {
      // Query the database to find all countries
      const countries = await Country.find();

      // Render the view with the retrieved countries
      res.render('countries', { countries });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving countries');
    }
  }

  // Controller function to add a new country
  async addCountry(req, res) {
    const { name, country_image } = req.body;

    try {
      // Create a new country object
      const newCountry = new Country({ name, country_image });

      // Save the country to the database
      await newCountry.save();

      res.redirect('/countries');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error adding country');
    }
  }

  // Controller function to delete a country
  async deleteCountry(req, res) {
    const { countryId } = req.params;

    try {
      // Delete the country from the database
      await Country.findByIdAndDelete(countryId);

      res.redirect('/countries');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting country');
    }
  }
}

module.exports = new CountryController();
