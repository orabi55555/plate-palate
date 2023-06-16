


const Order = require("../Models/OrderModel");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userID, totalPrice, status, quantity, address, meals } = req.body;
    const order = await Order.create({
      userID,
      totalPrice,
      status,
      quantity,
      address,
      meals,
    });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an order by ID
exports.updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userID, totalPrice, status, quantity, address, meals } = req.body;
    const order = await Order.findByIdAndUpdate(
      id,
      { userID, totalPrice, status, quantity, address, meals },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(201).json({ message: 'Order deleted successfully' }); // Add success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
















// const Order = require("../Models/OrderModel");

// // Importing necessary dependencies
// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');

// // Setting up body-parser middleware to parse JSON data
// // router.use(bodyParser.json());

// const getOrders = async (req, res) => {
//     try {
//       const orders = await Order.find();
//       res.status(200).json(orders);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };

//   const getOrderById = async (req, res) => {
//     const orderId = req.params.id;
//     try {
//       const order = await Order.findById(orderId);
//       if (!order) {
//         return res.status(404).json({ message: 'Order not found' });
//       }
//       return res.json(order);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };

// const createOrder = async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
  
//       const order = new Order(req.body);
//       const savedOrder = await order.save();
  
//       res.status(201).json(savedOrder);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   const updateOrder = async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
  
//       const { id } = req.params;
//       const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });
  
//       if (!updatedOrder) {
//         return res.status(404).json({ message: 'Order not found' });
//       }
  
//       res.status(200).json(updatedOrder);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   const deleteOrder = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const deletedOrder = await Order.findByIdAndDelete(id);
  
//       if (!deletedOrder) {
//         return res.status(404).json({ message: 'Order not found' });
//       }
  
//       res.status(200).json(deletedOrder);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
//   module.exports = {getOrders,getOrderById,createOrder,updateOrder,deleteOrder};

// //GET request to retrieve all orders
// // router.get('/', (req, res, next) => {
// //   Order.find()
// //     .exec()
// //     .then((orders) => {
// //       res.status(200).json({
// //         orders,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err,
// //       });
// //     });
// // });

// //POST request to create a new order
// // router.post('/', (req, res, next) => {
// //   const order = new Order({
// //     _id: new mongoose.Types.ObjectId(),
// //     product: req.body.product,
// //     quantity: req.body.quantity,
// //   });

// //   order
// //     .save()
// //     .then((result) => {
// //       res.status(201).json({
// //         message: 'Order placed successfully',
// //         createdOrder: result,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err,
// //       });
// //     });
// // });

// //GET request to retrieve a specific order by ID
// // router.get('/:orderId', (req, res, next) => {
// //   const id = req.params.orderId;
// //   Order.findById(id)
// //     .exec()
// //     .then((order) => {
// //       if (order) {
// //         res.status(200).json({
// //           order,
// //         });
// //       } else {
// //         res.status(404).json({
// //           message: 'No valid entry found for provided ID',
// //         });
// //       }
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err,
// //       });
// //     });
// // });

// //DELETE request to delete a specific order by ID
// // router.delete('/:orderId', (req, res, next) => {
// //   const id = req.params.orderId;
// //   Order.deleteOne({ _id: id })
// //     .exec()
// //     .then((result) => {
// //       res.status(200).json({
// //         message: 'Order deleted successfully',
// //         result,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err,
// //       });
// //     });
// // });


