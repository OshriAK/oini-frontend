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
import Filter from '../../components/filter/Filter';

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
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : filteredProducts ? (
        <>
          <div className="home-sortSeatch">
            <Search products={products} setProducts={setFilteredProducts} />
            <SortProduct
              products={products}
              setProducts={setFilteredProducts}
            />
          </div>
          <div className="home-row1">
            <div className="home-filters">
              <Filter products={products} setProducts={setFilteredProducts} />
            </div>
            <div className="home-productsList">
              <h2 className="home-container-title">מחשבים ניידים</h2>
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
