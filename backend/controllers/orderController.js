const orderModel = require('../models/orderModel');

exports.createOrder = (req, res, next) => {
    const cartItems = req.body;
    const amount = cartItems.reduce((acc, items) => (acc + item.product.price * items.qty), 0);
    console.log(amount, 'AMOUNT');
    // orderModel.create()
    res.json({
        success: true,
        message: ' Order works!'
    })
}