import Axios from 'axios'
import Cookie from 'js-cookie'

import { CART_ADD_SUCCESS, CART_REMOVE_ITEM, CART_SAVE_PAYMENT } from '../constants/cartConstants'




const addToCart = (productId, qty) => async(dispatch, getState) => {

    try{
        const {data} = await Axios.get('http://localhost:8081/products/id/' + productId)
        
        dispatch({type: CART_ADD_SUCCESS, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }})

        const {cartList: {cartItems}} = getState()
        Cookie.set('cartItems', JSON.stringify(cartItems))

    } catch(error) {

        console.log('erro in cartActions = ')
        console.log(error)
        
    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {

    dispatch({type: CART_REMOVE_ITEM, payload: productId})

    const {cartList: {cartItems}} = getState()

    Cookie.set('cartItems', JSON.stringify(cartItems))
    
}

const savePayment = (paymentInfo) => async (dispatch) => {

    try{

        const {data} = await Axios.post('http://localhost:8081/payments', paymentInfo)

        Cookie.remove('cartItems')
        alert("Obrigado por comprar na Game Store!")
        window.location.reload()

    } catch(error) {
        console.log('erro = ')
        console.log(error)
    }
    
}

export {addToCart, removeFromCart, savePayment}