import React from 'react'

import '../styles/products.css'

function Products() {
    return( 
        <main className="main">


            <div className="all-products">
                
                <div className="product-categories">
                    <div className="category">
                        <h3>All</h3>
                    </div>
                    <div className="category">
                        <h3>Controllers</h3>
                    </div>
                    <div className="category">
                        <h3>Consoles</h3>
                    </div>
                    <div className="category">
                        <h3>Others</h3>
                    </div>
                </div>

                <div className="product-input">
                    <label htmlFor="product">Search: </label>
                    <input name="product" type="text"></input>
                </div>
                

                <div className="box-products">
                    
                    <div className="product-content">

                        <div className="product-img">
                            <img src="/images/products/products/acessorio1.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>


                        </div>

                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/acessorio2.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>


                        </div>
                        

                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/acessorio3.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/console1.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/console2.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/console3.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle1.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle2.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle3.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle4.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>

                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle5.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>


                        </div>
                    </div>

                    <div className="product-content">

                        <div className="product-img">
                            <img src="images/products/products/controle6.jpg" alt="Product"></img>
                        </div>

                        <div className="product-description">

                            <div className="product-name">
                                <h3>Nome do Produto</h3>
                            </div>

                            <div className="product-price">
                                A partir de R$ 99,00
                            </div>


                        </div>
                    </div>

                </div>

                <div className="button">
                    <button> Prev </button>
                    <button> Next </button>
                </div>
            </div>

            
        </main>
    )
}

export default Products