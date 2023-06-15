const Food = require("../Models/FoodModel");

exports.getFoodById = function(req, res) {
  Food.findById(req.params.id)
    .then(Food => {
      if (!Food) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json( Food);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
 };