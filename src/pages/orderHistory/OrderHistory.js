import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Components
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './OrderHistory.css';
import { listOrderMine } from '../../redux/actions/orderActions';

const OrderHistory = () => {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  return (
    <div className="orderHistory-container">
      <h1 className="orderHistory-title">היסטוריות ההזמנות שלך</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="orderHistory-table">
          <thead>
            <tr>
              <th>מספר הזמנה</th>
              <th>תאריך</th>
              <th>סכום</th>
              <th>שולם</th>
              <th>נשלח</th>
              <th> פעולות</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>₪{order.totalPrice}</td>
                  <td>{order.isPaid ? 'כן' : 'לא'}</td>
                  <td>{order.isDelivered ? 'כן' : 'לא'}</td>
                  <td>
                    <button
                      type="button"
                      className="orderHistory-detail-button"
                      onClick={() => {
                        history.push(`/order/${order._id}`);
                      }}
                    >
                      פרטים
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
