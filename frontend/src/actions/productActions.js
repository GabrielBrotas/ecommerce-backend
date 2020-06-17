import Axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_ITEM_REQUEST, PRODUCT_ITEM_SUCCESS, PRODUCT_ITEM_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS } from '../constants/productConstants'


const listProducts = (filterCondition) => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        
        if(filterCondition === null){

            const {data} = await Axios.get('http://localhost:8081/products/')
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})

        } else {
            const {data} = await Axios.get('http://localhost:8081/products/' + filterCondition)
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
        
        }  
    
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }

}


const productById = (id) => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_ITEM_REQUEST})
        
        const {data} = await Axios.get('http://localhost:8081/products/id/' + id)
        dispatch({type: PRODUCT_ITEM_SUCCESS, payload: data})
        
    } catch(error) {
        dispatch({type: PRODUCT_ITEM_FAIL})
    }
}


const saveProduct = (product) => async (dispatch) => {

    try {

        dispatch({type: PRODUCT_SAVE_REQUEST, payload: product})

        if(!product._id){

            const {data} = await Axios.post('http://localhost:8081/products', product)
            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data})

        } else {
            const {data} = await Axios.put('http://localhost:8081/products/' + product._id, product)

            dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data})
        }

        
    } catch(error) {
        dispatch({type: PRODUCT_SAVE_FAIL, payload: error.message})
    }
}


const deleteProduct = (productId) => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_DELETE_REQUEST, payload: productId})

        const {data} = await Axios.delete('http://localhost:8081/products/' + productId)

        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true})
    } catch(error) {
        dispatch({type: PRODUCT_DELETE_FAIL, payload: error.message})
    }
}

export {listProducts, productById, saveProduct, deleteProduct}