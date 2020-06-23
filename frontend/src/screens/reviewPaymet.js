import React, { useEffect, useState } from 'react'
import Paypal from '../screens/Paypal'
import '../styles/shoppingCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { savePayment } from '../actions/cartActions'


function ReviewPayment(props) {
    
    const cart = useSelector(state => state.cartList)
    const {cartItems, addressInfo} = cart

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin

    const [amount, setAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()
    // console.log(props.addressTest)

    useEffect( () => {
        setAmount(cartItems.reduce( (accumulator, currentValue) => accumulator + currentValue.qty, 0))
        setTotalPrice((cartItems.reduce( (accumulator, currentValue) => accumulator + currentValue.price * currentValue.qty, 0)).toFixed(2))
    }, [cartItems])


    const transactionSuccess = (payment) => {
        const { paid, paymentID } = payment
        if(paid) {
            dispatch(savePayment({email: userInfo.email, paymentID, cartItems, addressInfo}))
            props.history.push('/')
        }
    }


    const transactionError = () => {
        console.log('transaction error')
    }
    
    return(

        <main className="main">
            
        <div className="shoppingcart-content">
            
            
            <div className="list-content">
                <div className="address-content">
                    
                    <div className="address-info">
                        <label>Para</label>
                        <input value={addressInfo.name} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>cep</label>
                        <input value={addressInfo.cep} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>Estado</label>
                        <input value={addressInfo.uf} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>Cidade</label>
                        <input value={addressInfo.localidade} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>bairro</label>
                        <input value={addressInfo.bairro} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>Endereço</label>
                        <input value={addressInfo.logradouro} readOnly></input>
                    </div>

                    <div className="address-info">
                        <label>Numero</label>
                        <input value={addressInfo.number} readOnly></input>
                    </div>
                    
                    <div className="address-info">
                        <label>Telefone para contato</label>
                        <input value={addressInfo.phone} readOnly></input>
                    </div>

                </div>

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

                
                </div>

                ))}
            

            </div>

            <div className="buy-items-content">

                <h3>Finalizar Compra</h3>
                <h4>Qtd items: {amount}</h4>
                <h4>Preço Final: R$ {totalPrice}</h4>

                {cartItems.length > 0 ?

                    userInfo ? 
                    <Paypal toPay={totalPrice} amount={amount} onSuccess={transactionSuccess} transactionError={transactionError} />
                    :
                    <button onClick={() => props.history.push('/signin')} className="button-buy">Comprar!</button>
                
                : <div></div>
                }
                

            </div>

        </div>
        </main>
    )
}

export default ReviewPayment