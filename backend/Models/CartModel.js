const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
userId: {
type: mongoose.Schema.Types.ObjectId,
required: true,
ref: 'User',
},
items: [{
foodId: {
type: mongoose.Schema.Types.ObjectId,
required: true,
ref: 'Food',
},
quantity: {
type: Number,
required: true,
default: 0,
},
}],
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;