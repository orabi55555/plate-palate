const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
userId: {
type: mongoose.Schema.Types.ObjectId,
required: false,
ref: 'User',
},
items: [{
foodId: {
type: mongoose.Schema.Types.ObjectId,
required: false,
ref: 'Food',
},
quantity: {
type: Number,
required: false,
default: 0,
},
}],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;