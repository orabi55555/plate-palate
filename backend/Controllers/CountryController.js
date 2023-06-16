const Country = require('../Models/CountryModel');


const countryController = {
  getCountries: async (req, res) => {
    try {
      // Find all countries in the database
      const countries = await Country.find();

      // Send the response to the client
      res.status(200).json({
        message: 'Successfully fetched countries',
        countries,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCountry: async (req, res) => {
    try {
      // Create a new country based on request body
      const { name, country_image } = req.body;
      const country = new Country({ name, country_image });

      // Save the country to the database
      // You can replace this with your preferred database implementation
      // For example, using Mongoose: `const createdCountry = await Country.create(country);`
      const createdCountry = await saveCountryToDatabase(country);

      // Send the response to the client
      res.status(201).json({
        message: 'Country created successfully',
        country: createdCountry,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

// Example function to save the country to a database
function saveCountryToDatabase(country) {
  return new Promise((resolve) => {
    // Here you can implement your preferred database logic to save the country
    // In this example, we're just returning the country as is

    resolve(country);
  });
}

module.exports = countryController;






















// class CountryController {
//   // Controller function to get all countries
//   async getAllCountries(req, res) {
//     try {
//       // Query the database to find all countries
//       const countries = await Country.find();

//       // Render the view with the retrieved countries
//       res.render('countries', { countries });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Error retrieving countries');
//     }
//   }

//   // Controller function to add a new country
//   async addCountry(req, res) {
//     const { name, country_image } = req.body;

//     try {
//       // Create a new country object
//       const newCountry = new Country({ name, country_image });

//       // Save the country to the database
//       await newCountry.save();

//       res.redirect('/countries');
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Error adding country');
//     }
//   }

//   // Controller function to delete a country
//   async deleteCountry(req, res) {
//     const { countryId } = req.params;

//     try {
//       // Delete the country from the database
//       await Country.findByIdAndDelete(countryId);

//       res.redirect('/countries');
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Error deleting country');
//     }
//   }
// }

// module.exports = new CountryController();
