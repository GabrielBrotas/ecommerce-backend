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
                            <img src="images/products/bestsellers/deadbydl.jpg" alt="Product"></img>
                        </div>

                    
                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/dota.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/fortnite.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/gta.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/overewatch.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/paladins.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/thewitcherejpg.jpg" alt="Product"></img>
                        </div>

                    </div>

                    <div className="game-content">

                        <div className="game-img">
                            <img src="images/products/bestsellers/wow.jpg" alt="Product"></img>
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

export default Games