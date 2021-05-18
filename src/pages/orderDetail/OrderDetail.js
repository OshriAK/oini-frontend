import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { detailsOrder } from '../../redux/actions/orderActions';

//Components
import ProductInOrder from '../../components/productInOrder/ProductInOrder';
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './OrderDetail.css';

const OrderDetail = () => {
  const { id } = useParams('id');
  const dispatch = useDispatch();
  const history = useHistory();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsOrder(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  return loading === undefined || loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="orderDetail-container">
      <h2>מספר הזמנה: {order._id}</h2>
      <div className="orderDetail-row1">
        <div className="orderDetail-address">
          <h2 className="orderDetail-title">כתובת משלוח</h2>
          <div>
            <span>שם מלא: </span>
            {order.shippingAddress.fullName}
          </div>
          <div>
            <span>עיר: </span>
            {order.shippingAddress.city}
          </div>
          <div>
            <span>כתובת: </span>
            {order.shippingAddress.address}
          </div>
          <div>
            <span>ארץ: </span>
            {order.shippingAddress.country}
          </div>
          <div>
            <span>מספר סלולרי: </span>
            {order.shippingAddress.phoneNumber}
          </div>
          {order.isDelivered ? (
            <MessageBox variant="success">
              נשלח ב: {order.deliveredAt}
            </MessageBox>
          ) : (
            <MessageBox variant="danger">עדיין לא נשלח</MessageBox>
          )}
        </div>

        <div className="orderDetail-payment">
          <h2 className="orderDetail-title">אמצעי תשלום</h2>
          <div>
            <span>אמצעי תשלום: </span>
            {order.paymentMethod}
          </div>
          {order.isPaid ? (
            <MessageBox variant="success">שולם ב: {order.paidAt}</MessageBox>
          ) : (
            <MessageBox variant="danger">לא שולם עדיין</MessageBox>
          )}
        </div>
      </div>
      <div className="orderDetail-orderList">
        <h2 className="orderDetail-title">פריטים שהוזמנו</h2>
        {order.orderItems.map((item) => {
          return (
            <ProductInOrder
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
      <div className="orderDetail-totalPrice">
        <div>סה"כ לתשלום:</div>
        <div style={{ fontWeight: 'bold' }}>₪{order.totalPrice}</div>
      </div>
    </div>
  );
};

export default OrderDetail;
