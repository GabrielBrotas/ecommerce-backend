const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,
    },
    bestseller: {
        type: Boolean,
        required: true,
        default: false,
    },
    carousel: {
        type: Boolean,
        required: true,
        default: false
    }
})

const productModel = mongoose.model('Product', productsSchema)

module.exports = productModel