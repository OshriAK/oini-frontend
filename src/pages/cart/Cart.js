import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../../components/messageBox/MessageBox';

import ProductInCart from '../../components/productInCart/ProductInCart';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  let totalPrice = 0;
  cartItems.forEach((prod) => (totalPrice += parseInt(prod.price) * prod.qty));

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart-empty-container">
          <MessageBox>עגלת הקניות ריקה</MessageBox>
          <Link className="returnHome" to="/">
            חזרה לעמוד המוצרים
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-container-products-list">
            <h2>רשימת המוצרים בעגלה:</h2>
            {cartItems.map((item) => {
              return (
                <ProductInCart
                  key={item.product}
                  id={item.product}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  countInStock={item.countInStock}
                  qty={item.qty}
                />
              );
            })}
          </div>
          <div className="cart-container-subtotal">
            <h2>סך כל הקניות:</h2>
            <h3>
              <span className="cart-span">{' ' + cartItems.length}</span> מוצרים
              בעגלה
            </h3>
            <h3>
              סה"כ לתשלום : <span className="cart-span">₪{totalPrice}</span>
            </h3>
            <button
              className="cart-continue-order-button"
              disabled={cartItems.length === 0}
              onClick={() => {
                console.log('click');
              }}
            >
              המשך הזמנה
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
