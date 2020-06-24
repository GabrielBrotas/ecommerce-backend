import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWTSECRET, {
        expiresIn: '48h'
    })
}

export {getToken}