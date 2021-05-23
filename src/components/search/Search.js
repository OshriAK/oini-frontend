import React, { useEffect, useState } from 'react';

import './Search.css';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, setProducts } = props;

  const searchHandler = (e) => {
    //debounce
    let timeoutId = setTimeout(() => {
      setSearchTerm(e);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  useEffect(() => {
    if (products) {
      setProducts(
        products.filter((prod) => {
          if (searchTerm === ' ' || searchTerm === '') {
            return prod;
          } else if (
            prod.brand.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return prod;
          } else if (
            prod.makat.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return prod;
          } else if (
            prod.model.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return prod;
          } else if (
            prod.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return prod;
          }
          return null;
        })
      );
    }
  }, [products, searchTerm, setProducts]);

  return (
    <div className="search-container">
      <label>
        <i className="fas fa-search"></i>
      </label>
      <input
        type="text"
        className="search-container-input"
        placeholder="הכנס מילת חיפוש"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
