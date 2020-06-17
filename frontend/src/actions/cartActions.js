import Axios from 'axios'
import { CART_ADD_SUCCESS } from '../constants/cartConstants'

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

    } catch(error) {
        console.log('erro = ')
        console.log(error)
        
    }
}

export {addToCart}