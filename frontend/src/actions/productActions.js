import Axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'


const listProducts = () => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await Axios.get('http://localhost:8081/products')
        console.log(data[0])

        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }

}

export {listProducts}