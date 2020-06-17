import React, { useEffect } from 'react'

import '../styles/shoppingCart.css'
import { getIdAndQtyFromUrl } from '../helper'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

function Cart(props) {
    
    const cart = useSelector(state => state.cartList)
    const {cartItems} = cart

    // pegear o id e a quantidade caso tenha
    const url = props.location.search
    const productId = url ? getIdAndQtyFromUrl(url)[0] : null
    const qty = url ? getIdAndQtyFromUrl(url)[1] : 1
        
    const dispatch = useDispatch()

    useEffect( () => {
        
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
        
    }, [dispatch, productId, qty])

    console.log('***cart === ')
    console.log(cartItems)
    
    return(

        <main className="main">
            
        <div className="shoppingcart-content">
            
            <div className="list-content">

                {cartItems.map( item => (

                    <div key={item.product} className="list-body">
                        <div className="body-img">
                            <img src={item.image} alt="product"></img>
                        </div>

                        <div className="body-details">
                            <h3>{item.name}</h3>
                            <h4>Quantidade: {item.qty}</h4>
                        </div>

                        <div className="body-price">
                            <h3>R$ {item.price}</h3>
                        </div>

                        <div className="body-cancel-icon">
                            <img src="/images/fechar.png" alt="delete"></img>
                        </div>
                    
                    </div>

                ))}
                
            </div>

            <div className="buy-items-content">

                <h3>Finalizar Compra</h3>
                <h4>Qtd items: 3</h4>
                <h4>Preço Final: R$ 180,00</h4>
                <button className="button-buy">Comprar Agora</button>

            </div>

        </div>
        </main>
    )
}

export default Cart