// FoodRoutes.js

const express = require('express');
const router = express.Router();
const FoodController = require('../Controllers/FoodController');

//Define a route handler for GET /api/food/:id
router.get('/:id', FoodController.getFoodById);

// Define a route handler for GET /api/food
router.get('/foods', FoodController.getAllFood);

// Define a route handler for DELETE /api/food/:id
//router.delete('/delete/:id', FoodController.deleteFoodById);

// Define a route handler for PUT /api/food/:id
router.put('/update/:id', FoodController.updateFoodById);


module.exports = router;