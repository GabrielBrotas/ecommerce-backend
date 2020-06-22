import express from 'express'
import User from '../models/Users.mjs'
import Payment from '../models/Payments.mjs'

const router = express.Router()
const now = new Date


router.get('/:userId', async (req, res) => {
    try{
        const userId = req.params.userId
        const payment = await Payment.find({userId})
        res.send(payment)
    } catch(error) {
        res.status(500).send({message: 'erro === ' + error})
    }
    
})

router.post('/', async (req, res) => {
    const {email, cartItems, paymentID} = req.body
    const date = `${now.getDate()}/${parseInt(now.getMonth() +1)}/${now.getFullYear()}`
    try{
        const user = await User.findOne({email})

        for(let i=0; i < cartItems.length; i++){
            
            const payment = new Payment({
                userId: user._id,
                paymentId: paymentID,
                product: cartItems[i].name,
                amount: cartItems[i].qty,
                totalPrice: cartItems[i].qty * cartItems[i].price,
                date
            })

            const newPayment = await payment.save()

        }

        res.status(200).send({message: "payment saved"})
        
    } catch(error){
        console.log(error)
        res.status(500).send({message: 'error in save payment'})
    }
    
    
})

export default router