import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { detailsProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

//Components
import MessageBox from '../../components/messageBox/MessageBox';
import LoadingBox from '../../components/loadingBox/LoadingBox';

import './BenefitDetail.css';

const BenefitDetail = () => {
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
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="benefitDetail-container">
          <div className="benefitDetail-image-container">
            <img src={`../${product.image}`} alt={product.name} />
            <h3>מוצר זה ניתן לרכישה רק בקניית מחשב.</h3>
          </div>
          <div className="benefitDetail-detail">
            <h1 className="benefitDetail-name">{product.name}</h1>
            <h2 className="benefitDetail-price">
              מחיר:{' '}
              <span className="benefitDetail-price-span">
                ₪{product.price}{' '}
              </span>
            </h2>
            <h3>{product.description}</h3>
            <div className="benefitDetail-button-container">
              <button
                className="benefitDetail-addToCart-button"
                onClick={() => dispatch(addToCart(id, 1))}
              >
                הוסף לעגלה
              </button>
              <button
                className="benefitDetail-buyNow-button"
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
export default BenefitDetail;
