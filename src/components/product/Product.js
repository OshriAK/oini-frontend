import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { addToCart } from '../../redux/actions/cartActions';

import './Product.css';

const Product = ({ id, name, model, img, price, isNewComputer, makat }) => {
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
      <img src={img} alt={name} height="130px" />
      <h3>{name}</h3>
      <h4>
        {model}-{makat}
      </h4>

      <div className="product-container-price">₪{price}</div>
      {isNewComputer && <h3>מחשב מחודש</h3>}
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
