import React, { useState } from 'react';

import './ProductInCart.css';

const ProductInCart = ({ img, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="productInCart-container">
      <img src={img} alt={name} />
      <div>{name}</div>
      <input
        className="productInCart-quntity-input"
        type="number"
        min="1"
        max="4"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <h2>₪{price}</h2>
      <button className="productInCart-delete-button">מחק</button>
    </div>
  );
};

export default ProductInCart;
