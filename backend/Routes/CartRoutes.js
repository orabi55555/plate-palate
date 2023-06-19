const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/CartController');

// Get the user's cart by user ID
router.get('/:userId', cartController.getCart);
        
// Add an item to the user's cart
router.post('/', cartController.addToCart);

// Remove an item from the user's cart
router.delete('/:userId/:foodId', cartController.removeFromCart);

// Change the quantity of an item in the user's cart
router.patch('/:userId/:foodId', cartController.changeCartItemQuantity);

module.exports = router;