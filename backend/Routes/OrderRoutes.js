const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/OrderController');

//order routes
router.post('/create', orderController.createOrder);
router.get('/getorders', orderController.getOrders);
router.get('/:id', orderController.getOrderById);
router.put('/:id', orderController.updateOrderById);
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;
