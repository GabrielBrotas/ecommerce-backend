import express from 'express'
import User from '../models/Users.mjs'
import Payment from '../models/Payments.mjs'
import Product from '../models/Products.mjs'


const router = express.Router()
const now = new Date


router.get('/:userId?', async (req, res) => {
    try{
        const userId = req.params.userId
        if (userId){
            const payment = await Payment.find({userId})
            res.send(payment)
        } else {
            const payment = await Payment.find({})
            res.send(payment)
        }
        
    } catch(error) {
        res.status(500).send({message: 'erro === ' + error})
    }
    
})

router.post('/', async (req, res) => {
    const {email, cartItems, paymentID, addressInfo} = req.body

    const date = `${now.getDate()}/${parseInt(now.getMonth() +1)}/${now.getFullYear()}`
    try{
        const user = await User.findOne({email})
        console.log('cartitme==')
        console.log(cartItems)

        for(let i=0; i < cartItems.length; i++){
            
            // salvar venda
            const payment = new Payment({
                userId: user._id,
                paymentId: paymentID,
                productId: cartItems[i].product,
                product: cartItems[i].name,
                amount: cartItems[i].qty,
                address: addressInfo,
                totalPrice: cartItems[i].qty * cartItems[i].price,
                date
            })

            const newPayment = await payment.save()

            // remover a quantidade do estoque
            const product = await Product.findById(cartItems[i].product)
            if(product){
                product.countInStock -= cartItems[i].qty;
                await product.save()
            }
            
        }

        res.status(200).send({message: "payment saved"})
        
    } catch(error){
        console.log(error)
        res.status(500).send({message: 'error in save payment'})
    }
    
    
})


router.delete('/:id', async (req, res) => {
    const payment = await Payment.findById(req.params.id)
    if(payment){
        await payment.remove()
        res.send({message: 'product deleted'})
    } else {
        res.send({message: 'error in delete item'})
    }
})

router.put('/:id', async (req, res) => {
    const payment = await Payment.findById(req.params.id)
    if(payment){
        payment.delivered = !payment.delivered;
        const updatedPayment = await payment.save()
        res.status(200).send({message:'payment updated', data: updatedPayment})
    } else {
        res.status(500).send({message: 'error in delete item'})
    }
})


export default router