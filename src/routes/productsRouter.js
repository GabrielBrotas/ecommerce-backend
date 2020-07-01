const express = require('express')
const router = express.Router()

//models
const Product = require('../models/Products')


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


router.post('/', async (req, res) => {

    try{
        const {name, price, fileUrl, key, category, countInStock, description, bestseller, carousel} = req.body

        const product = new Product({
            name, 
            price,
            fileUrl,
            key, 
            category, 
            countInStock, 
            description, 
            bestseller, 
            carousel, 
        })
        
        const newProduct = await product.save()
    
        if(newProduct){
            return res.status(200).send({message: 'new product created', data: newProduct})
        }

    } catch(error) {
        console.log('erro = ' + error)
        return res.status(500).send({message: 'error in create new product'})
    }
    
})



router.put('/:id', async (req, res) => {

    try{
        const id = req.params.id
    
        const product = await Product.findById(id)
        const {name, price, fileUrl, key, image, category, countInStock, description, bestseller, carousel} = req.body

        if(product){
            product.name = name;
            product.price = price;
            product.fileUrl = fileUrl;
            product.key = key;
            product.image = image;
            product.category = category;
            product.countInStock = countInStock;
            product.description = description; 
            product.bestseller= bestseller;
            product.carousel= carousel;
    
            const updatedProduct = await product.save()
    
            if(updatedProduct){
                res.status(200).send({message:'product updated', data: updatedProduct})
            }
        }
    
    } catch(error){
        return res.status(500).send({message: 'error in update product'})
    }

})


router.delete('/:key', async (req, res) => {
    const product = await Product.findOne({key: req.params.key})
    if(product){
        await product.remove()
        res.send({message: 'product deleted'})
    } else {
        res.send({message: 'error in delete item'})
    }
})



module.exports = router