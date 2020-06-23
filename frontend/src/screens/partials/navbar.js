import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import '../../styles/partials.css'
import { useSelector } from 'react-redux'

import Cookie from 'js-cookie'

function Navbar(){

    const productList = useSelector(state => state.productList)
    const {loading, products, error } = productList

    const UserSignin = useSelector(state => state.userSignin)
    const {userInfo} = UserSignin

    const cartList = useSelector(state => state.cartList)
    const {cartItems} = cartList

    const logout = () => {
        Cookie.remove('userInfo')
        window.location.reload()
    }

    const [inputBar, setInputBar] = useState('')

    useEffect( () => {

        const searchBar = document.querySelector('.ul-products').getElementsByTagName('li')

        Array.from(searchBar).forEach(item => (
            
            inputBar === "" ? (item.style = 'display: none') :
            
            item.textContent.toLowerCase().match(inputBar.toLowerCase()) ?
            (item.style = "display: block") :
            (item.style = 'display: none') 
            
        ))

        
    }, [inputBar])

    function showNavbar(){
        document.querySelector('.navbar-ul-above').classList.remove('navbar-hide')
        document.querySelector('.navbar-ul-below').classList.remove('navbar-hide')

        document.querySelector('.navbar-ul-above').classList.add('navbar-show')
        document.querySelector('.navbar-ul-below').classList.add('navbar-show')

        document.querySelector('.navbar-icon-close').classList.add('closeNavBar')
        
    }

    function hideNavbar(){
        document.querySelector('.navbar-ul-above').classList.add('navbar-hide')
        document.querySelector('.navbar-ul-below').classList.add('navbar-hide')

        document.querySelector('.navbar-ul-above').classList.remove('navbar-show')
        document.querySelector('.navbar-ul-below').classList.remove('navbar-show')

        document.querySelector('.navbar-icon-close').classList.remove('closeNavBar')
    }

    return(
        loading ? <div>Navbar loading...</div> :
        error ? <div>Erro = {error}</div>:

        <header className="header">
    
            <div className="navbar-logo">
                <Link to="/" ><img src="/images/logo.png" alt="logo"></img></Link>
            </div>

            <div className="navbar-links above">
                <ul className="navbar-ul-above navbar-hide">
                    <Link to="/products/?filter=All" style={{ textDecoration: 'none' }}><li>Products</li></Link>
                </ul>
            </div>
            
            
            <div className="navbar-input">
                <input type="text" name="search" autoComplete="off" placeholder="O que está procurando?" value={inputBar} onChange={(e) => setInputBar(e.target.value)}></input>
                <div className="box-suggestion">
                    <ul className="ul-products">
                        {products.map(product => (
                            <Link to={"/product/" + product._id} key={product._id} style={{ textDecoration: 'none' }}>
                            <li onClick={() => setInputBar('')} id="inputSearch" >{product.name}</li>
                            </Link>
                        ))}
                        
                    </ul>
                </div>

            </div>

            <div className="navbar-links rigth below">
                
                <ul className="navbar-ul-below navbar-hide">

                    {userInfo ? 
                        <li onClick={logout}>Logout</li> : 
                    <Link to="/signin" style={{ textDecoration: 'none' }}><li>Sign in</li></Link>
                    }
                    {userInfo && <Link to="/compras" style={{ textDecoration: 'none' }}><li>Compras</li></Link>}
                    
                    

                    <div className="shopping-car">
                        
                        <Link to="/cart"><img src="/images/supermercado.png" alt="shopping car"></img></Link>
                        {cartItems.length > 0 &&
                        <Link to="/cart">
                        <div className="items-in-car">
                            
                            {cartItems.length}
                        </div>
                        </Link>
                        }
                    </div>

                    {userInfo && userInfo.isAdmin && <Link to="/admin/products" style={{ textDecoration: 'none' }}><li>Admin</li></Link> }
                    
                    
                </ul>
            </div>
            
            
            <div className="mobileview" onClick={() => showNavbar()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="navbar-icon-close" onClick={() => hideNavbar()}>
                <img src="/images/cancelar.png" alt="navbar icon close"></img>
            </div>
        </header>

    )
}

export default Navbar