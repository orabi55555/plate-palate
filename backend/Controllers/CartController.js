const Cart = require("../Models/CartModel");


exports.getCart = async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await Cart.findOne({ userId }).populate('items.foodId');
      res.status(200).json(cart);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.addItemToCart = async (req, res) => {
    try {
      const { userId, foodId, quantity } = req.body;
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
      const itemIndex = cart.items.findIndex((item) => item.foodId.equals(foodId));
      if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ foodId, quantity });
      }
      const updatedCart = await cart.save();
      res.status(201).json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  exports.updateCartItemQuantity = async (req, res) => {
    try {
      const { userId, foodId, quantity } = req.body;
      const cart = await Cart.findOneAndUpdate(
        { userId, 'items.foodId': foodId },
        { 'items.$.quantity': quantity },
        { new: true }
      );
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.removeItemFromCart = async (req, res) => {
    try {
      const { userId, foodId } = req.params;
      const cart = await Cart.findOneAndUpdate(
        { userId },
        { $pull: { items: { foodId } } },
        { new: true }
      );
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.incrementCartItemQuantity = async (req, res) => {
    try {
      const { userId, foodId } = req.params;
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      const item = cart.items.find((item) => item.foodId.equals(foodId));
      if (!item) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
      item.quantity += 1;
      const updatedCart = await cart.save();
      res.json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.decrementCartItemQuantity = async (req, res) => {
    try {
      const { userId, foodId } = req.params;
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      const item = cart.items.find((item) => item.foodId.equals(foodId));
      if (!item) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
      if (item.quantity === 1) {
        cart.items = cart.items.filter((item) => !item.foodId.equals(foodId));
      } else {
        item.quantity -= 1;
      }
      const updatedCart = await cart.save();
      res.json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };