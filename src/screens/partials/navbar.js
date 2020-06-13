import React from 'react'

import '../../index.css'

function Navbar() {
    return(

        <div className="navbar-container">

            <div className="navbar-logo">
                <img src="/images/logo.png" alt="logo"></img>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                </ul>
            </div>

            <div className="navbar-input">
                <img src="/images/lupa.png"></img>
                <input type="text" name="search" placeholder="O que está procurando?"></input>
            </div>

            <div className="navbar-links rigth">
                
                <ul>
                    <li>About Us</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>

    )
}


export default Navbar