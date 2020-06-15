import React from 'react'

import '../styles/shoppingCart.css'

function shoppingCart() {
    return(
        
    <main className="main">
    <div className="shoppingcart-content">

        <div className="list-content">


            <div className="list-body">
                <div className="body-img">
                    <img src="/images/products/products/acessorio1.jpg" alt="product"></img>
                </div>

                <div className="body-details">
                    <h3>Algum nome</h3>
                    <h4>Quantidade: 
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </h4>
                </div>

                <div className="body-price">
                    <h3>60,00</h3>
                </div>
            </div>
            <div className="list-body">
                <div className="body-img">
                    <img src="/images/products/products/acessorio1.jpg" alt="product"></img>
                </div>

                <div className="body-details">
                    <h3>Algum nome</h3>
                    <h4>Quantidade: 2</h4>
                </div>

                <div className="body-price">
                    <h3>60,00</h3>
                </div>
            </div>
            <div className="list-body">
                <div className="body-img">
                    <img src="/images/products/products/acessorio1.jpg" alt="product"></img>
                </div>

                <div className="body-details">
                    <h3>Algum nome</h3>
                    <h4>Quantidade: 2</h4>
                </div>

                <div className="body-price">
                    <h3>60,00</h3>
                </div>
            </div>
            
            
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

export default shoppingCart