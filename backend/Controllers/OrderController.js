


const Order = require("../Models/OrderModel");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userID, totalPrice, status, quantity, address, meals ,paymentIntentId } = req.body;
    const order = await Order.create({
      userID,
      totalPrice,
      status,
      quantity,
      address,
      meals,
      paymentIntentId ,
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




const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

exports.processPayment = async (req, res) => {
  try {
    const { amount, token, orderId } = req.body;
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'EG',
      source: token.id,
      description: 'MEAN Stack order payment',
    });
    // Update order status to 'paid'
    const order = await Order.findByIdAndUpdate(orderId, { status: 'paid' }, { new: true });
    res.json({ message: 'Payment processed successfully', order: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};











