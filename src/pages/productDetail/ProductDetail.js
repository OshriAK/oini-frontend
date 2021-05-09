import React from 'react';
import { useParams } from 'react-router';

import { computers } from '../../data';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams('id');
  const currentProduct = computers.find((prod) => prod.id === id);
  return (
    <div className="productDetail-container">
      <img
        src={`../${currentProduct.image}`}
        alt={currentProduct.name}
        height="250px"
      />
      <div className="productDetail-detail">
        <h1>{currentProduct.name}</h1>
        <h2>מחיר:₪{currentProduct.price}</h2>
        <h2>מעבד: {currentProduct.detail.CPUmodel}</h2>
        <h2>כונן קשיח: {currentProduct.detail.hardDiskSize}GB</h2>
        <h2>זכרון מחשב: {currentProduct.detail.computerMemorySize}GB</h2>
        <h2>גודל מסך: "{currentProduct.detail.screenSize}"</h2>
        <h2>מערכת הפעלה: {currentProduct.detail.operatingSystem}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
