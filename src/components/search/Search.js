import React from 'react';

import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-container-input" placeholder="חפש" />
      <label>
        <i className="fas fa-search"></i>
      </label>
    </div>
  );
};

export default Search;
