const { CART_ADD_REQUEST, CART_ADD_FAIL, CART_ADD_SUCCESS } = require("../constants/cartConstants");


function cartReducer(state = {cartItems: []}, action) {

    switch (action.type) {
        case CART_ADD_REQUEST:
            
            return{loading: true, cartItems: []}
            
        case CART_ADD_SUCCESS:
            
            const item = action.payload;
            
            // verificar se o item já está no carrinho
            const product = state.cartItems.find( carrinho => carrinho.product === item.product)

            if(product) {
                // se o item já estiver no carrinho vai substituir pelo antigo (caso tenha mudado a qtd)
                return { loading: false,
                    cartItems: state.cartItems.map( carrinho => carrinho.product === product.product ? item : carrinho)
                }
            }
            // se o produto nao existir adicionar no carrinho
            return {cartItems: [...state.cartItems, item]}
        
        case CART_ADD_FAIL:
            
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export {cartReducer}