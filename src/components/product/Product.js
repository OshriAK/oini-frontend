import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { addToCart } from '../../redux/actions/cartActions';

import './Product.css';

const Product = ({ id, name, model, img, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(id, 1));
  };

  const buyNowHandler = () => {
    dispatch(addToCart(id, 1));
    history.push('/cart');
  };

  return (
    <div className="product-container">
      <img src={img} alt={name} height="140px" />
      <h3>{name}</h3>
      <h3>{model}</h3>
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
      <button className="product-buyNow-button" onClick={buyNowHandler}>
        קנייה מידיית
      </button>
    </div>
  );
};

export default Product;
