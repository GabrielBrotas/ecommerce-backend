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
import Admin from './screens/admin'
import Signin from './screens/signin'
import Signup from './screens/signup'

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />

        <div className="content">
          <Route path="/signup" render={(props) => <Signup {...props} />}></Route>
          <Route path="/signin" render={(props) => <Signin {...props} />}></Route>
          <Route path="/admin" render={(props) => <Admin {...props} />} ></Route>
          <Route path="/Cart" render={(props) => <Cart {...props} />} />
          <Route path="/product" render={(props) => <Product {...props} />} />
          <Route path="/products" render={(props) => <Products {...props} />} />
          <Route path="/" exact={true} render={(props) => <HomePage {...props} />} />
        </div>
      
      <Footer />

    </BrowserRouter>
  );

}

export default App;
