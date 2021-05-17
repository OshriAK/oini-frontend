import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout } from '../../redux/actions/userActions';
import Search from '../search/Search';

import './Navbar.css';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.userSignin);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

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
          {user.userInfo ? (
            <div className="dropdown">
              <NavLink to="#" className="navbar-single-link">
                <div className="signin-name">
                  {user.userInfo.name} <i className="fa fa-caret-down"></i>
                </div>
              </NavLink>
              <ul className="dropdown-content">
                <li>
                  <NavLink to="/profile">עדכן פרופיל</NavLink>
                </li>
                <li>
                  <NavLink to="/orderhistory">הזמנות קודמות</NavLink>
                </li>
                <li>
                  <NavLink to="#sigout" onClick={signoutHandler}>
                    התנתק
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/signin" className="navbar-single-link">
              <i className="far fa-user"></i>
              <div>אורח</div>
            </NavLink>
          )}
        </li>
        <li>
          <NavLink to="/cart" className="navbar-single-link">
            {cartItems.length !== 0 && <span>{cartItems.length}</span>}
            <i className="fas fa-shopping-cart"></i>
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
