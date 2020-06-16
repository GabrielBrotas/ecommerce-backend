
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import productsRouter from './routes/productsRouter.mjs'

// database
mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then( () => {
    console.log('conectado ao DB')
}).catch( err => {
    console.log('erro ao se conectar com o db: ' + err)
})

// bodyparser
app.use(bodyParser.json())

// config do CORS para permitir requisicoes
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/products', productsRouter)




app.listen(8081, () => {
    console.log('API running in http://localhost:8081')
})