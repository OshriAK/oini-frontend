import React, { useState, useEffect, useRef } from 'react';
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
  const { loading, error, products } = productList;
  const [filteredProducts, setFilteredProducts] = useState();
  const dispatch = useDispatch();
  const productsToSearch = useRef();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (products) {
      productsToSearch.current = products.filter(
        (prod) => prod.category.toLowerCase() !== 'benefits'
      );
    }
  }, [products]);

  return (
    <div className="home-container">
      <TopBoard />
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : filteredProducts ? (
        <>
          <div className="home-sortSeatch">
            <Search
              products={productsToSearch.current}
              setProducts={setFilteredProducts}
            />
            <SortProduct
              products={productsToSearch.current}
              setProducts={setFilteredProducts}
            />
          </div>
          <div className="home-row1">
            <div className="home-filters">
              <Filter
                products={productsToSearch.current}
                setProducts={setFilteredProducts}
              />
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
