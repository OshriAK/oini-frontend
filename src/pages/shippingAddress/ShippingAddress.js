import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveShippingAddress } from '../../redux/actions/cartActions';

//Components
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps';

import './ShippingAddress.css';

const ShippingAddress = () => {
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [country, setCountry] = useState(shippingAddress.country || '');
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress.phoneNumber || ''
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, city, address, country, phoneNumber })
    );
    history.push('/payment');
  };

  return (
    <div className="shippingAddress-container">
      <CheckoutSteps step1 step2 />
      <div className="shippingAddress-title">פרטי משלוח</div>
      {/* {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>} */}
      <form className="shippingAddress-form" onSubmit={submitHandler}>
        <label htmlFor="name"> שם מלא:</label>
        <input
          type="text"
          id="name"
          placeholder="הכנס שם"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="city">עיר:</label>
        <input
          type="text"
          id="city"
          placeholder="הכנס עיר"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="address">כתובת:</label>
        <input
          type="text"
          id="address"
          placeholder="הכנס כתובת"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="country"> ארץ:</label>
        <input
          type="text"
          id="country"
          placeholder="הכנס ארץ"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="phoneNumber"> מספר טלפון:</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="הכנס מספר טלפון"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="register-form-button" type="submit">
          סיום הרשמה
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
