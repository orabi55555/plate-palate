const express = require('express');
const router = express.Router();
const foodController = require('../Controllers/FoodController');
router.get('/foods', foodController.getAllFood);
router.get('/:id', foodController.getFoodById);

// router.post('/', userController.createFood);
router.post('/create',foodController.createFood);
router.delete('/delete/:id',foodController.deleteFoodById);
router.get('/foods/category/:category', foodController.getFoodByCategory);
router.put('/update/:id', FoodController.updateFoodById);
module.exports = router;
