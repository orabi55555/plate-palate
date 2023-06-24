const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
      totalPrice: {
        type: Number,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        required: false,
        default: Date.now,
      },
      quantity:{
        type: Number,
        required: false,
      },
      address:{
        type: String,
        required: false,
      },

      meals: [
         {
        mealID: {
          type: mongoose.Schema.Types.ObjectId,
         ref: "Food",
          required: false,
           },}
          ],   
          
       
});

module.exports = mongoose.model("Order", OrderSchema);