import express from 'express'
const router = express.Router()

// model
import User from '../models/Users.mjs'

// bcrypt para gerar hash da senha
import bcrypt from 'bcryptjs'

// helpers
import { getToken } from '../helper.mjs'

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
                res.status(404).send({message: 'invalid password'})
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



export default router