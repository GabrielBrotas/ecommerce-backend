import express from 'express'
import Product from '../models/Products.mjs'
const router = express.Router()

router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.send(products)
})

router.post('/', async (req, res) => {

    const product = new Product({
        name: req.body.name, //
        price: req.body.price, //
        image: req.body.image, //
        category: req.body.category, //
        countInStock: req.body.countInStock, //
        description: req.body.description, //
        bestSeller: req.body.bestseller, //
        carousel: req.body.carousel, //
        // name: 'Teste',
        // price: 60.99,
        // image: '/images/products/console1.jpg',
        // category: 'console',
        // countInStock: 5,
        // description: 'Playtaition nova geração e tals',

    })

    const newProduct = await product.save()

    if(newProduct){
        return res.status(200).send({message: 'new product created', data: newProduct})
    }

    return res.status(500).send({message: 'error in create new product'})
})


export default router