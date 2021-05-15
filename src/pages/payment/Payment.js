import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { savePaymentMethod } from '../../redux/actions/cartActions';

//Components
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps';

import './Payment.css';

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history = useHistory();

  const [paymentMethod, setPaymentMethod] = useState('CreditCard');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/finalPage');
  };

  useEffect(() => {
    if (!shippingAddress.address || !userInfo) {
      history.push('/shippingAddress');
    }
  }, [history, shippingAddress, userInfo]);

  return (
    <div className="payment-container">
      <CheckoutSteps step1 step2 step3 />
      <div className="payment-title">אמצעי תשלום</div>
      <form className="payment-form" onSubmit={submitHandler}>
        <div>
          <input
            type="radio"
            id="creditCard"
            value="CreditCard"
            name="paymentMethod"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="creditCard">כרטיס אשראי</label>
        </div>
        <div>
          <input
            type="radio"
            id="bankTransfer"
            value="BankTransfer"
            name="paymentMethod"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="bankTransfer">העברה בנקאית</label>
        </div>
        <button className="payment-form-button" type="submit">
          המשך
        </button>
      </form>
    </div>
  );
};

export default Payment;
