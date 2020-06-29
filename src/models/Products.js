const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({

    name: { // nome do produto
        type: String,
        required: true
    },
    image: { // url em que a imagem está contida
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,
    },
    bestseller: {
        type: Boolean,
        required: true,
        default: false,
    },
    carousel: {
        type: Boolean,
        required: true,
        default: false
    }
})

// interceptar acoes do banco de dados (middlaware), verificar se a url esta vazia (querendo salvar no disco), se estiver vamos preencher com a url do static.
// pre('save') = antes de salvar
// function() ao inves de arrow function pois vamos precisar do 'this' e a arrow function nao permite ter acesso
productsSchema.pre('save', function() {
    // se a imagem nao ter url
    if(!this.imageUrl){
        this.url = `${process.env.APP_URL}/files/${this.key}`
    }
})


const productModel = mongoose.model('Product', productsSchema)

module.exports = productModel