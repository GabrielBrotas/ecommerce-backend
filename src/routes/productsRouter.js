const express = require('express')
const router = express.Router()

//models
const Product = require('../models/Products')

//libraries
const multer = require('multer')
const multerConfig = require('../config/multer')


function checkPagination(page, limit, model){

    const results = {}

    // se a page for 1 no array vai ser index 0 
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    // se a quantidade de itens da ultima pagina for maior que a quantidade de itens do DB nao tem proxima pagina
    if(endIndex < model.length){
        results.next = {
            page: page+1,
            limit: limit
        }
    }

    // se nao estiver na primeira pagina...
    if(startIndex > 0) {
        results.previous = {
            page: page-1,
            limit: limit
        }
    }
    if(page && limit){
        results.results = model.slice(startIndex, endIndex)
    } else {
        results.results = model
    }

    return results
}


router.get('/', async (req, res) => {

    const filter = req.query.filter

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    
    if(!filter){
        const products = await Product.find({})
        const results = checkPagination(page, limit, products)
        res.send(results)
    
    } else {
        const products = await Product.find({category: filter})
        const results = checkPagination(page, limit, products)
        res.send(results)
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


router.post('/', multer(multerConfig).single('file'),async (req, res) => {

    const {name, price, image, category, countInStock, description, bestseller, carousel} = req.body
    
    const {size, key, location: url = '' = req.file}
    
    try{
        const product = new Product({
            name, 
            price, 
            image: url,
            key, 
            category, 
            countInStock, 
            description, 
            bestseller, 
            carousel, 
        })
        
        return res.json(product)
        // const newProduct = await product.save()
    
        // if(newProduct){
        //     return res.status(200).send({message: 'new product created', data: newProduct})
        // }

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



module.exports = router