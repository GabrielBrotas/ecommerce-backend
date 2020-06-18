import Axios from 'axios'
import Cookie from 'js-cookie'

import { CART_ADD_SUCCESS, CART_REMOVE_ITEM } from '../constants/cartConstants'

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

export {addToCart, removeFromCart}