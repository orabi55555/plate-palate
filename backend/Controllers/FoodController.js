// FoodController.js

const Food = require('../Models/FoodModel');

// Get a food item by ID
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};




// Get all food items
const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


// Delete a food item by ID
// const deleteFoodById = async (req, res) => {
//   try {
//     const food = await Food.findByIdAndDelete(req.params.id);
//     if (!food) {
//       return res.status(404).json({ error: 'Food item not found' });
//     }
//     res.json({ message: 'Food item deleted successfully' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };





// Update a food item by ID
const updateFoodById = async (req, res) => {
  try {
    const { title, summary, image, category, price } = req.body;
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      { title, summary, image, category, price },
      { new: true }
    );
    if (!food) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getFoodById,
  getAllFood,
  // deleteFoodById,
  updateFoodById,
};