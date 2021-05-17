import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createOrder } from '../../redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '../../redux/constants/orderConstants';

//Components
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps';
import ProductInCart from '../../components/productInCart/ProductInCart';
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './FinalPage.css';

const FinalPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  useEffect(() => {
    if (!paymentMethod || !userInfo) {
      history.push('/payment');
    }
  }, [history, paymentMethod, userInfo]);

  let totalPrice = 0;
  cartItems.forEach((prod) => (totalPrice += parseInt(prod.price) * prod.qty));

  const finalApproveHandler = () => {
    dispatch(
      createOrder({
        ...cart,
        orderItems: cart.cartItems,
        totalPrice: totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [success, history, dispatch, order]);

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
      <div className="finalPage-totalPrice">
        <div>סה"כ לתשלום:</div>
        <div style={{ fontWeight: 'bold' }}>₪{totalPrice}</div>
      </div>
      <button
        className="finalPage-finalApprove-button"
        onClick={finalApproveHandler}
      >
        אישור סופי והזנת פרטי אשראי
      </button>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
    </div>
  );
};

export default FinalPage;
