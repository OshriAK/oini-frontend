import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';

import './BenefitInCart.css';

const BenefitInCart = ({ id, image, name, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id, 1));
  };

  return (
    <div className="benefitsInCart-container">
      <div className="benefitsInCart-img-name">
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </div>
      <h3>₪{price}</h3>
      <div className="BenefitInCart-buttons-container">
        <NavLink
          to={`/benefitDetail/${id}`}
          className="BenefitInCart-detail-button"
        >
          פרטים
        </NavLink>
        <button
          className="BenefitInCart-cart-button"
          onClick={addToCartHandler}
        >
          <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default BenefitInCart;
