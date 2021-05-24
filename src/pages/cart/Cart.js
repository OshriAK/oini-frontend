import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { listProducts } from '../../redux/actions/productActions';

//Components
import ProductInCart from '../../components/productInCart/ProductInCart';
import BenefitInCart from '../../components/benefitInCart/BenefitInCart';
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let totalPrice = 0;
  cartItems.forEach((prod) => (totalPrice += parseInt(prod.price) * prod.qty));

  const continueOrderHandler = () => {
    history.push('/signin?redirect=shippingAddress');
  };

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
            <div>
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
          </div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : products ? (
            <div className="cart-container-benefits">
              <h2>הטבות בקניית מחשב:</h2>
              <div className="cart-benefits-list">
                {products.map((item) => {
                  if (item.category.toLowerCase() === 'benefits') {
                    return (
                      <BenefitInCart
                        key={item.makat}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="cart-container-subtotal">
            <h2>סך כל הקניות:</h2>
            {cartItems.length === 1 ? (
              <h3>
                {' '}
                יש לך
                <span className="cart-span"></span> מוצר אחד בעגלה
              </h3>
            ) : (
              <h3>
                {' '}
                יש לך
                <span className="cart-span">{' ' + cartItems.length}</span>{' '}
                מוצרים בעגלה
              </h3>
            )}
            <h3>
              סה"כ לתשלום : <span className="cart-span">₪{totalPrice}</span>
            </h3>
            <button
              className="cart-continue-order-button"
              disabled={cartItems.length === 0}
              onClick={continueOrderHandler}
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
