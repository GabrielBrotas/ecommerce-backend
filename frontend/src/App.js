import React from 'react';

// libraries
import {BrowserRouter, Route} from 'react-router-dom'

// Screens
import Navbar from './screens/partials/navbar'
import Footer from './screens/partials/footer'
import HomePage from './screens/home'
import Products from './screens/products'
import Product from './screens/product'
import Cart from './screens/shoppingCart'
import Admin from './screens/admin';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

        <div className="content">
          <Route path="/admin" render={() => <Admin />} ></Route>
          <Route path="/Cart" render={(props) => <Cart {...props} />} />
          <Route path="/product" render={(props) => <Product {...props} />} />
          <Route path="/products" render={() => <Products />} />
          <Route path="/" exact={true} render={() => <HomePage />} />
        </div>
      
      <Footer />

    </BrowserRouter>
  );

}

export default App;
