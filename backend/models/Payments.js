const mongoose = require('mongoose')

const paymentsSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    delivered: {
        type: Boolean,
        required: true,
        default: false,
    } 
    
})

const paymentsModel = mongoose.model('Payment', paymentsSchema)

module.exports = paymentsModel