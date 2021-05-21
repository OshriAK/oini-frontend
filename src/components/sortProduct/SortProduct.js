import React, { useEffect, useState } from 'react';

import './SortProduct.css';

const SortProduct = (props) => {
  const { products, setProducts } = props;
  const [sort, setSort] = useState('ללא מיון');

  useEffect(() => {
    if (products) {
      if (sort === 'מחיר: מהגבוה לנמוך') {
        setProducts([
          ...products.sort((a, b) => {
            return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
          }),
        ]);
      } else if (sort === 'מחיר: מהנמוך לגבוה') {
        setProducts([
          ...products.sort((a, b) => {
            return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
          }),
        ]);
      } else if (sort === 'שם המותג') {
        setProducts([
          ...products.sort((a, b) => {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
          }),
        ]);
      }
    }
  }, [sort, products, setProducts]);

  return (
    <div className="sortProduct-container">
      <label>מיון לפי:</label>
      <div className="sortProduct-dropdown">
        <div>
          <div className="sortMethod">
            {sort} <i className="fa fa-caret-down"></i>
          </div>
        </div>
        <ul className="dropdown-content">
          <li>
            <div onClick={() => setSort('ללא מיון')}>ללא מיון</div>
          </li>
          <li>
            <div onClick={() => setSort('מחיר: מהגבוה לנמוך')}>
              מחיר: מהגבוה לנמוך
            </div>
          </li>
          <li>
            <div onClick={() => setSort('מחיר: מהנמוך לגבוה')}>
              מחיר: מהנמוך לגבוה
            </div>
          </li>
          <li>
            <div onClick={() => setSort('שם המותג')}>שם המותג</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortProduct;
