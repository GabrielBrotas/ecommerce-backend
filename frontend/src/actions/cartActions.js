import Axios from 'axios'
import { CART_ADD_REQUEST, CART_ADD_FAIL, CART_ADD_SUCCESS } from '../constants/cartConstants'

const addToCart = (productId, qty) => async(dispatch) => {

    try{

        dispatch({type: CART_ADD_REQUEST})

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
        console.log(error)
        dispatch({type: CART_ADD_FAIL})
    }
}

export {addToCart}