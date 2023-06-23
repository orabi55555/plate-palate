const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/CartController');

router.post('/add-item', cartController.addItemToCart);
router.put('/update-item', cartController.updateCartItemQuantity);
router.delete('/remove-item/:userId/:foodId', cartController.removeItemFromCart);
router.put('/increment-item/:userId/:foodId', cartController.incrementCartItemQuantity);
router.put('/decrement-item/:userId/:foodId', cartController.decrementCartItemQuantity);
router.get('/:userId', cartController.getCart);


module.exports = router;
