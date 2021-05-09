import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
            <div>דף הבית</div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <div> עגלת הקניות</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
