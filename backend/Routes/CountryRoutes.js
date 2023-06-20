const express = require('express');
const router = express.Router();
const countryController = require('../Controllers/CountryController');

// Route to get a specific country
router.get('/:countryId/getallrecipes', countryController.getCountryWithRecipes);

// Route to display all countries
router.get('/countries/getall', countryController.getCountries);

router.get('/:countryId/recipes', countryController.getAllRecipes);

// Route to add a new country
router.post('/create', countryController.addCountry);

// Route to delete a country
router.delete('/:countryId', countryController.deleteCountry);

module.exports = router;
