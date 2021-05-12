import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';

import './Navbar.css';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <nav className="navbar">
      {/* logo */}
      <NavLink to="/" className="navbar__logo">
        <h2>OiNi</h2>
      </NavLink>

      {/* search */}
      <Search />

      {/* links */}
      <ul className="navbar__links">
        <li>
          <NavLink to="/cart" className="navbar-single-link">
            {cartItems.length !== 0 && <span>{cartItems.length}</span>}
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth" className="navbar-single-link">
            <i className="far fa-user"></i>
          </NavLink>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
