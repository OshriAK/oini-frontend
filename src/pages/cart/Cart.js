import React from 'react';

import { computers } from '../../data';
import ProductInCart from '../../components/productInCart/ProductInCart';
import './Cart.css';

const Cart = () => {
  const prod1 = computers.find((prod) => prod.id === '1');
  const prod2 = computers.find((prod) => prod.id === '2');

  const prodArr = [];
  prodArr.push(prod1);
  prodArr.push(prod2);
  let totalPrice = 0;
  prodArr.forEach((prod) => (totalPrice += parseInt(prod.price)));

  return (
    <div className="cart-container">
      <div className="cart-container-products-list">
        <h2>רשימת המוצרים בעגלה:</h2>
        {prodArr.map((prod) => (
          <ProductInCart
            key={prod.id}
            img={prod.image}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
      <div className="cart-container-subtotal">
        <h2>סך כל הקניות:</h2>
        <h3>
          <span className="cart-span">{' ' + prodArr.length}</span> מוצרים בעגלה
        </h3>
        <h3>
          סה"כ לתשלום : <span className="cart-span">₪{totalPrice}</span>
        </h3>
        <button className="cart-continue-order-button">המשך הזמנה</button>
      </div>
    </div>
  );
};

export default Cart;
