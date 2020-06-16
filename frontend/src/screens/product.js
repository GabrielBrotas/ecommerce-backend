import React from 'react'
import '../styles/product.css'

function Product() {
    return(

        <div className="main-content">

            <div className="buy-product-image">
                <img src="/images/products/acessorio1.jpg" alt="buy product"></img>
            </div>

            <div className="buy-product-details">

                <div className="buy-product-name">
                    <h2>Exmplo de nome</h2>
                </div>

                <div className="buy-product-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae cum autem blanditiis vitae, facere exercitationem, est asperiores unde tempore in suscipit iste. Nobis blanditiis soluta rerum, reiciendis vel enim.</p>
                </div>

            </div>

            <div className="buy-product-actions">
                <h3>Add to Cart</h3>
                
                <div className="buy-product-qty">
                    <label htmlFor='qty'>Qty:</label>
                    <select name="qty">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                
                <div className="buy-product-price">
                    <label htmlFor="price">Price:</label>
                    <h4>R$ 100.00</h4>
                </div>
                
                <button> Add to Cart</button>
            </div>
        </div>
    )
}

export default Product