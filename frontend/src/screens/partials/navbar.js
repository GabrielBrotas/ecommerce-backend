import React from 'react'
import {Link} from 'react-router-dom'

import '../../styles/partials.css'
import { useSelector } from 'react-redux'

import Cookie from 'js-cookie'

function Navbar(){

    const UserSignin = useSelector(state => state.userSignin)
    const {userInfo} = UserSignin

    const logout = () => {
        Cookie.remove('userInfo')
        window.location.reload()
    }

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
        
        <header className="header">
    
            <div className="navbar-logo">
                <Link to="/" ><img src="/images/logo.png" alt="logo"></img></Link>
            </div>

            <div className="navbar-links above">
                <ul className="navbar-ul-above navbar-hide">
                    <Link to="/products" style={{ textDecoration: 'none' }}><li>Products</li></Link>
                </ul>
            </div>
            
            
            <div className="navbar-input">
                <input type="text" name="search" placeholder="O que está procurando?"></input>
                <img src="/images/lupa.png" alt="search"></img>
            </div>

            <div className="navbar-links rigth below">
                
                <ul className="navbar-ul-below navbar-hide">

                    {userInfo ? <li onClick={logout}>Logout</li> : 
                    <Link to="/signin" style={{ textDecoration: 'none' }}><li>Sign in</li></Link>
                    }
                    

                    <div className="shopping-car">
                        
                        <Link to="/cart"><img src="/images/supermercado.png" alt="shopping car"></img></Link>
                        
                        <Link to="/cart">
                        <div className="items-in-car">
                            1
                        </div>
                        </Link>
                    </div>

                    {userInfo && userInfo.isAdmin && <Link to="/admin" style={{ textDecoration: 'none' }}><li>Admin</li></Link> }
                    
                    
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