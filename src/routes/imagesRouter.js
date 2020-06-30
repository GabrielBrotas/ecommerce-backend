const express = require('express')
const router = express.Router()

// model
const Image = require('../models/Images')

//libraries
const multer = require('multer')
const multerConfig = require('../config/multer')

router.get('/', async (req, res) => {
    const images = await Image.find({})
    res.send(images)
})


router.post('/', multer(multerConfig).single('file'),async (req, res) => {

    try{
        const {originalname: name, size, key, location: url = ''} = req.file

        const imageUpload = new Image({
            name, 
            size,
            key,
            url 
        })

        const newImageUpload = await imageUpload.save()

        return res.send(imageUpload)

    } catch(error) {
        console.log('erro = ' + error)
        return res.status(500).send({message: 'error in save image'})
    }
    
})


router.delete('/:id', async (req, res) => {
    const image = await Image.findOne({key: req.params.id})
    await image.remove()
    return res.send()
})


module.exports = router
