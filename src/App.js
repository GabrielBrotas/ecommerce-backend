import React from 'react';

// libraries
import {BrowserRouter, Route} from 'react-router-dom'

// Screens
import Navbar from './pages/partials/navbar'
import Footer from './pages/partials/footer'
import HomePage from './pages/home'
import Products from './pages/products'
import Games from './pages/games'
import Product from './pages/product'
import ShoppingCart from './pages/shoppingCart'

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

        <div className="content">
          <Route path="/Cart" component={ShoppingCart}/>
          <Route path="/product" component={Product}/>
          <Route path="/games" component={Games}/>
          <Route path="/products" component={Products}/>
          <Route path="/" exact={true} component={HomePage}/>
        </div>
      
      <Footer />

    </BrowserRouter>
  );

}

export default App;
