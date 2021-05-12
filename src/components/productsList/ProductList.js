import React from 'react';

import Product from '../product/Product';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="products-list-container">
      {products.map((prod) => {
        return (
          <Product
            key={prod._id}
            id={prod._id}
            name={prod.name}
            img={prod.image}
            price={prod.price}
            detail={prod.detail}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
