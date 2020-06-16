import React from 'react';

// libraries
import {BrowserRouter, Route} from 'react-router-dom'

// Screens
import Navbar from './screens/partials/navbar'
import Footer from './screens/partials/footer'
import HomePage from './screens/home'
import Products from './screens/products'
import Games from './screens/games'
import Product from './screens/product'
import ShoppingCart from './screens/shoppingCart'
import Admin from './screens/admin';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

        <div className="content">
          <Route path="/admin" component={Admin}></Route>
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
