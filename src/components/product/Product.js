import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addToCart } from '../../redux/actions/cartActions';

import './Product.css';

const Product = ({ id, name, img, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id, 1));
  };

  return (
    <div className="product-container">
      <h2>{name}</h2>
      <img src={img} alt={name} height="150px" />
      <div className="product-container-price">₪{price}</div>
      <div className="product-container-buttons-container">
        <NavLink
          to={`/productDetail/${id}`}
          className="product-container-details"
        >
          פרטים
        </NavLink>
        <button className="button-addToCart" onClick={addToCartHandler}>
          הוסף לעגלה
        </button>
      </div>
    </div>
  );
};

export default Product;
