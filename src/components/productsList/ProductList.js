import React from 'react';

import Product from '../product/Product';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="products-list-container">
      {products.map((prod) => {
        if (prod.category.toLowerCase() === 'computers') {
          return (
            <Product
              key={prod._id}
              id={prod._id}
              name={prod.name}
              model={prod.model}
              img={prod.image}
              price={prod.price}
              isNewComputer={prod.isNewComputer}
              officialImporter={prod.officialImporter}
              detail={prod.detail}
              makat={prod.makat}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ProductList;
