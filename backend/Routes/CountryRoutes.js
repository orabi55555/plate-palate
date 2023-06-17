const express = require('express');
const router = express.Router();
const countryController = require('../Controllers/CountryController');

// Route to display all countries
router.get('/', countryController.getAllCountries);

// Route to add a new country
router.post('/create', countryController.addCountry);

// Route to delete a country
router.delete('/:countryId', countryController.deleteCountry);

module.exports = router;
