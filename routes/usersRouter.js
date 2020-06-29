const express = require('express')
const router = express.Router()

// model
const User = require('../models/Users.js')

// bcrypt para gerar hash da senha
const bcrypt = require('bcryptjs')

// helpers
const { getToken } = require('../helper.js')

router.get('/', async (req, res) => {

    const users = await User.find({})
    res.send(users)

})

router.post('/signin', async (req, res) => {

    try {
        const {email, password} = req.body

        const signinUser = await User.findOne({
            email: email
        })

        if(signinUser) {

            const match = await bcrypt.compare(password, signinUser.password)

            if(match) {
                
                res.send({
                    _id: signinUser.id,
                    name: signinUser.name,
                    email: signinUser.email,
                    isAdmin: signinUser.isAdmin,
                    token: getToken(signinUser)
                })
                  
            } else {
                res.status(404).send({message: 'invalid'})
            }
        } else {
            res.status(404).send({message: 'user not found'})
        }

    } catch(error) {
        res.status(404).send({message: 'error: ' + error})
    }
})

router.post('/register', async (req, res) => {

    try{

        const checkIfUserExist = await User.findOne({
            email: req.body.email
        })

        console.log('*** check if user exixt === ')
        console.log(checkIfUserExist)

        if(!checkIfUserExist) {
            
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(req.body.password, salt)

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            })
        
            const newUser = await user.save()
            
            if(newUser){
                res.send({
                    _id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                    token: getToken(newUser)
                })
            }
        }

    } catch(error) {
        res.status(500).send({message: 'email ja cadastrado === ' + error})
    }
    
})



module.exports = router