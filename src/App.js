import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/backdrop/Backdrop';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Footer from './components/footer/Footer';

//pages
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Signin from './pages/signin/Signin';
import Register from './pages/register/Register';
import ProductDetail from './pages/productDetail/ProductDetail';
import ShippingAddress from './pages/shippingAddress/ShippingAddress';
import Payment from './pages/payment/Payment';
import FinalPage from './pages/finalPage/FinalPage';

import './App.css';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="app-container">
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app-container-main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/productDetail/:id">
              <ProductDetail />
            </Route>
            <Route path="/shippingAddress">
              <ShippingAddress />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/finalPage">
              <FinalPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
