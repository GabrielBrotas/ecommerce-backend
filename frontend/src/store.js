import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDeleteReducer, productItemReducer } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducer'

const cartItems = []
const initialState = {cartList: {cartItems}}

const reducer = combineReducers({
    productList: productListReducer,
    productItem: productItemReducer,
    productDelete: productDeleteReducer,
    cartList: cartReducer
})


const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))

export default store