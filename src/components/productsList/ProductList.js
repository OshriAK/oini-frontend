import React from 'react';

import Product from '../product/Product';
import { computers } from '../../data';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="products-list-container">
      {computers.map((prod) => {
        return (
          <Product
            key={prod.id}
            id={prod.id}
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
