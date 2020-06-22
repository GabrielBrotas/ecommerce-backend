import mongoose from 'mongoose'

const paymentsSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    paymentId: {
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
    date: {
        type: String,
        required: true
    } 
    
})

const paymentsModel = mongoose.model('Payment', paymentsSchema)

export default paymentsModel