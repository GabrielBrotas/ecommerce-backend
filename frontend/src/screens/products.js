import React, { useEffect, useState } from 'react'

import '../styles/products.css'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'

function Products() {

    const [filterCondition, setFilterCondition] = useState(false)

    const productList = useSelector(state => state.productList)
    const {loading, products, error} = productList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts(filterCondition))
        
    }, [dispatch, filterCondition])


    return( 
        loading ? <div>Loading...</div>
        :
        error ? <div>Erro: {error}</div>
        :
        <main className="main">

            <div className="all-products">
                
                <div className="product-categories">
                    <div className="category" onClick={(e) => setFilterCondition(false)}>
                        <h3>All</h3>
                    </div>
                    <div className="category" id="Game" onClick={(e) => setFilterCondition(e.currentTarget.id)}>
                        <h3>Games</h3>
                    </div>
                    <div className="category" id="Controle" onClick={(e) => setFilterCondition(e.currentTarget.id)}>
                        <h3>Controllers</h3>
                    </div>
                    <div className="category" id="Console" onClick={(e) => setFilterCondition(e.currentTarget.id)}>
                        <h3>Consoles</h3>
                    </div>
                    <div className="category" id="Outros" onClick={(e) => setFilterCondition(e.currentTarget.id)}>
                        <h3>Others</h3>
                    </div>
                </div>

                <div className="product-input">
                    <label htmlFor="product">Search: </label>
                    <input name="product" type="text"></input>
                </div>
                

                <div className="box-products">
                    
                    {products.map( product => (

                        <Link to={"/product/" + product._id} key={product._id} style={{ textDecoration: 'none', color: '#161616' }}>
                            <div className="product-content">

                                <div className="product-img">
                                    <img src={product.image} alt="Product"></img>
                                </div>

                                <div className="product-description">

                                    <div className="product-name">
                                        <h3>{product.name}</h3>
                                    </div>

                                    <div className="product-price">
                                        A partir de R$ {product.price}
                                    </div>


                                </div>

                            </div>
                        </Link>
                    ))}
                    

                </div>

                <div className="triangle-buttons">
                    <div className="triangle-prev"></div>
                    <div className="triangle-next"></div>
                </div>
            </div>

            
        </main>
    )
}

export default Products