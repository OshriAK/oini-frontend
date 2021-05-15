import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

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
  const history = useHistory();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  const buyNowHandler = () => {
    dispatch(addToCart(id, 1));
    history.push('/cart');
  };

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
            <h2>דגם:{product.model}</h2>
            <h2>מעבד: {product.detail.CPUmodel}</h2>
            <h2>כונן קשיח: {product.detail.hardDiskSize}GB</h2>
            <h2>זכרון מחשב: {product.detail.computerMemorySize}GB</h2>
            <h2>גודל מסך: "{product.detail.screenSize}"</h2>
            <h2>מערכת הפעלה: {product.detail.operatingSystem}</h2>
            <h2 className="productDetail-price">
              מחיר:
              <span className="productDetail-price-span">₪{product.price}</span>
            </h2>
            <div className="productDetail-button-container">
              <button
                className="productDetail-addToCart-button"
                onClick={() => dispatch(addToCart(id, 1))}
              >
                הוסף לעגלה
              </button>
              <button
                className="productDetail-buyNow-button"
                onClick={buyNowHandler}
              >
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
