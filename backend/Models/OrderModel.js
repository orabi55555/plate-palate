const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
        default: Date.now,
      },
      meals: [
        {
          mealID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true,
          },}],   
          
          quantity:{
            type: Number,
        required: true,
          },
          address:{
            type: String,
            required: true,
          },

});

module.exports = mongoose.model("Order", OrderSchema);