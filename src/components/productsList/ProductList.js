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
            model={prod.model}
            img={prod.image}
            price={prod.price}
            isNewComputer={prod.isNewComputer}
            detail={prod.detail}
            makat={prod.makat}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
