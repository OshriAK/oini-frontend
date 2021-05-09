import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';

import './Navbar.css';

const Navbar = ({ click }) => {
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
            <span>0</span>
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
