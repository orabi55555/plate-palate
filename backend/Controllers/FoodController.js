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
 