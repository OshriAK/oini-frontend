import React from 'react';

import ProductList from '../../components/productsList/ProductList';
import TopBoard from '../../components/top-board/TopBoard';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <TopBoard />
      <h2 data-text="Welcome" className="home-container-title">
        מחשבים ניידים
      </h2>
      <ProductList />
    </div>
  );
};

export default Home;
