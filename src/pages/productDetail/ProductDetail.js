import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { detailsProduct } from '../../redux/actions/productActions';

//Components
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './ProductDetail.css';
import { addToCart } from '../../redux/actions/cartActions';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailsProduct(id));
    console.log('id: ', id);
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="productDetail-container">
          <img src={`../${product.image}`} alt={product.name} />
          <div className="productDetail-detail">
            <h1>{product.name}</h1>
            <h2>מחיר:₪{product.price}</h2>
            <h2>מעבד: {product.detail.CPUmodel}</h2>
            <h2>כונן קשיח: {product.detail.hardDiskSize}GB</h2>
            <h2>זכרון מחשב: {product.detail.computerMemorySize}GB</h2>
            <h2>גודל מסך: "{product.detail.screenSize}"</h2>
            <h2>מערכת הפעלה: {product.detail.operatingSystem}</h2>
            <div className="productDetail-button-container">
              <button
                className="productDetail-addToCart-button"
                onClick={() => dispatch(addToCart(id, 1))}
              >
                הוסף לעגלה
              </button>
              <button className="productDetail-buyNow-button">
                {' '}
                קנייה מיידית
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
