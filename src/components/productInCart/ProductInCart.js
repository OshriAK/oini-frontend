import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import './ProductInCart.css';

const ProductInCart = ({ img, name, price, countInStock, qty, id }) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="productInCart-container">
      <img src={img} alt={name} />
      <Link to={`/productDetail/${id}`}>{name}</Link>
      <h3>כמות:</h3>
      <div>
        <select
          value={qty}
          onChange={(e) => dispatch(addToCart(id, e.target.value))}
          className="productInCart-quntity-select"
        >
          {[...Array(countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <h2>₪{price * qty}</h2>
      <button
        className="productInCart-delete-button"
        onClick={deleteItemHandler}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default ProductInCart;
