import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps';
import ProductInCart from '../../components/productInCart/ProductInCart';
import './FinalPage.css';

const FinalPage = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!paymentMethod || !userInfo) {
      history.push('/payment');
    }
  }, [history, paymentMethod, userInfo]);

  return (
    <div className="finalPage-container">
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="finalPage-row1">
        <div className="finalPage-address">
          <h2 className="finalPage-title">כתובת משלוח</h2>
          <div>
            <span>שם מלא: </span>
            {shippingAddress.fullName}
          </div>
          <div>
            <span>עיר: </span>
            {shippingAddress.city}
          </div>
          <div>
            <span>כתובת: </span>
            {shippingAddress.address}
          </div>
          <div>
            <span>ארץ: </span>
            {shippingAddress.country}
          </div>
          <div>
            <span>מספר סלולרי: </span>
            {shippingAddress.phoneNumber}
          </div>
        </div>
        <div className="finalPage-payment">
          <h2 className="finalPage-title">אמצעי תשלום</h2>
          <div>
            <span>אמצעי תשלום: </span>
            {paymentMethod}
          </div>
        </div>
      </div>
      <div className="finalPage-orderList">
        <h2 className="finalPage-title">פריטים שהוזמנו</h2>
        {cartItems.map((item) => {
          return (
            <ProductInCart
              key={item.product}
              id={item.product}
              img={item.image}
              name={item.name}
              price={item.price}
              qty={item.qty}
              countInStock={item.countInStock}
            />
          );
        })}
      </div>
      <button
        className="finalPage-finalApprove-button"
        onClick={() => {
          alert('הזמנתך התקבלה בהצלחה!');
        }}
      >
        אישור הזמנה סופי
      </button>
    </div>
  );
};

export default FinalPage;
