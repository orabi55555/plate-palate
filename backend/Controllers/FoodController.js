// FoodController.js

const Food = require('../Models/FoodModel');

// Get a food item by ID
// const getFoodById = async (req, res) => {
//   try {
//     const food = await Food.findById(req.params.id);
//     if (!food) {
//       return res.status(404).json({ error: 'Food item not found' });
//     }
//     res.json(food);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };




// Get all food items
// const getAllFood = async (req, res) => {
//   try {
//     const foods = await Food.find();
//     res.json(foods);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };


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
// const updateFoodById = async (req, res) => {
//   try {
//     const { title, summary, image, category, price } = req.body;
//     const food = await Food.findByIdAndUpdate(
//       req.params.id,
//       { title, summary, image, category, price },
//       { new: true }
//     );
//     if (!food) {
//       return res.status(404).json({ error: 'Food item not found' });
//     }
//     res.json(food);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// module.exports = {
//   getFoodById,
//   getAllFood,
//   // deleteFoodById,
//   updateFoodById,
// }

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
 
 exports.getAllFood = function(req, res) {
  Food.find()
    .then(foods => {
      res.json(foods);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};
exports.createFood = function (req, res) {
  const{title,summary,image,category,price} = req.body;
 //const { title, summary, image, category, price } = req.body;
   console.log(req.body);  
   if (!(title && summary && category && price)) {
     return res.status(400).json({ message: "Please provide all required fields" });
   }
 
   const food = new Food({
     title,
     summary,
     image,
     category,
     price,
   });
 
   try {
     const result =  food.save();
     res.status(200).json({ message: "Food created successfully", food: result });
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };

//Delete
 exports.deleteFoodById = function(req, res) {
  const id = req.params.id;
  Food.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        return res.status(404).json({ message: 'Food not found' });
      }
      res.status(200).json({ message: 'Food deleted successfully' });
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};

//Search
exports.getFoodByCategory = function(req, res) {
  const category = req.params.category;

  Food.find({ category: category })
    .then(foods => {
      res.json(foods);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};

//update
exports.updateFoodById = async (req, res) => {
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