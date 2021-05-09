import React from 'react';

import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <label>
        <i className="fas fa-search"></i>
      </label>
      <input type="text" className="search-container-input" placeholder="חפש" />
    </div>
  );
};

export default Search;
