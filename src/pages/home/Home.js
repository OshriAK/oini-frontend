import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';

//Components
import ProductList from '../../components/productsList/ProductList';
import TopBoard from '../../components/top-board/TopBoard';
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';

import './Home.css';

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home-container">
      <TopBoard />
      <h2 data-text="Welcome" className="home-container-title">
        מחשבים ניידים
      </h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Home;
