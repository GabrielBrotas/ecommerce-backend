const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({

    name: { // nome do produto
        type: String,
        required: true
    },
    fileUrl: { // url em que a imagem está contida
        type: String,
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