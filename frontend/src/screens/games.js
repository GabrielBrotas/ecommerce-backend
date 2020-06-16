import React from 'react'

import '../styles/games.css'

function Games() {
    return (
        <main className="main">


            <div className="all-games">
                
                <div className="game-input">
                    <label htmlFor="product">Search: </label>
                    <input name="product" type="text"></input>
                </div>
                

                <div className="box-games">
                    
                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/deadbydl.jpg" alt="Product"></img>
                        </div>

                    
                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/dota.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/fortnite.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/gta.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/overewatch.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/paladins.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/thewitcherejpg.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/wow.jpg" alt="Product"></img>
                        </div>

                    </div>

                </div>

                <div className="triangle-buttons">
                    <div className="triangle-prev"></div>
                    <div className="triangle-next"></div>
                </div>
            </div>


            
        </main>
    )
}

export default Games