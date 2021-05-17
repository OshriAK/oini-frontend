import React from 'react';
import { Link } from 'react-router-dom';

import './ProductInOrder.css';

const ProductInCart = ({ img, name, price, qty, id }) => {
  return (
    <div className="productInCart-container">
      <img src={`../${img}`} alt={name} />
      <Link to={`/productDetail/${id}`}>{name}</Link>
      <h3>כמות: {qty}</h3>
      <h2>₪{price * qty}</h2>
    </div>
  );
};

export default ProductInCart;
