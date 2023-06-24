const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more fields as needed for your countries

  country_image: {
    type: String,
    required: false
  },
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;
