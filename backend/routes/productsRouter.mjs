import express from 'express'
import Product from '../models/Products.mjs'
const router = express.Router()

router.get('/:filter?', async (req, res) => {

    const filter = req.params.filter
    const id = req.params.id

    if(!filter){
        const products = await Product.find({})
        res.send(products)
    
    } else {
        const products = await Product.find({category: filter})
        res.send(products)

    } 
    
})

router.get('/id/:id', async (req, res) => {

    const id = req.params.id

    try{
        const product = await Product.findOne({_id: id})
        res.send(product)
    } catch(error) {
        res.status(404).send({message: 'product not found'})
    }
    
   
    
})

router.post('/', async (req, res) => {

    try{
        const product = new Product({
            name: req.body.name, 
            price: req.body.price, 
            image: req.body.image, 
            category: req.body.category, 
            countInStock: req.body.countInStock, 
            description: req.body.description, 
            bestseller: req.body.bestseller, 
            carousel: req.body.carousel, 
        })
    
        const newProduct = await product.save()
    
        if(newProduct){
            return res.status(200).send({message: 'new product created', data: newProduct})
        }

    } catch(error) {
        return res.status(500).send({message: 'error in create new product'})
    }
    
})

router.put('/:id', async (req, res) => {

    try{
        const id = req.params.id
    
        const product = await Product.findById(id)
    
        if(product){
            product.name = req.body.name;
            product.price = req.body.price;
            product.image = req.body.image;
            product.category = req.body.category;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description; 
            product.bestseller= req.body.bestseller;
            product.carousel= req.body.carousel;
    
            const updatedProduct = await product.save()
    
            if(updatedProduct){
                res.status(200).send({message:'product updated', data: updatedProduct})
            }
        }
    
        

    } catch(error){
        return res.status(500).send({message: 'error in update product'})
    }
    

})

router.delete('/:id', async (req, res) => {

    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove()
        res.send({message: 'product deleted'})
    } else {
        res.send({message: 'error in delete item'})
    }
})


export default router