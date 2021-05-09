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
import ProductDetail from './pages/productDetail/ProductDetail';

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
            <Route path="/productDetail/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
