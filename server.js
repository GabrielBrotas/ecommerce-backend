
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// rotas
const productsRouter = require('./routes/productsRouter.js')
const usersRouter = require('./routes/usersRouter.js')
const paymentsRouter = require('./routes/paymentsRouter.js')

// dotenv
require('dotenv/config')

// configs

    app.use(express.json()) // lidar com formatos json
    app.use(express.urlencoded({extended: true})) // lidar com requisições do tipo url


    // database
    mongoose.connect(process.env.DATABASE_URL, {
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
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request =
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', '*');
        next();
    });


app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/payments', paymentsRouter)


app.listen(8081, () => {
    console.log('API running in http://localhost:8081')
})