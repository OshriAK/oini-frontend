import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

const Product = ({ id, name, img, price }) => {
  return (
    <div className="product-container">
      <h2>{name}</h2>
      <img src={img} alt={name} height="150px" />
      <div className="product-container-price">{price}₪</div>
      <div className="product-container-buttons-container">
        <NavLink
          to={`/productDetail/${id}`}
          className="product-container-details"
        >
          פרטים
        </NavLink>
        <button className="button-addToCart" onClick={() => {}}>
          הוסף לעגלה
        </button>
      </div>
    </div>
  );
};

export default Product;
