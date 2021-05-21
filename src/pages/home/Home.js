import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';

//Components
import ProductList from '../../components/productsList/ProductList';
import TopBoard from '../../components/top-board/TopBoard';
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';
import Search from '../../components/search/Search';
import SortProduct from '../../components/sortProduct/SortProduct';

import './Home.css';

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const { loading, error, products } = productList;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="home-container">
      <TopBoard />
      <div className="home-sortSeatch">
        <Search products={products} setProducts={setFilteredProducts} />
        <SortProduct products={products} setProducts={setFilteredProducts} />
      </div>
      <h2 data-text="Welcome" className="home-container-title">
        מחשבים ניידים
      </h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : filteredProducts ? (
        <ProductList products={filteredProducts} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
