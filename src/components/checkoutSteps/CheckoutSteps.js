import React from 'react';

import './CheckoutSteps.css';

const CheckoutSteps = (props) => {
  return (
    <div className="checkoutSteps-container">
      <div className={props.step1 ? 'active' : ''}>הרשמה</div>
      <div className={props.step2 ? 'active' : ''}>פרטי משלוח</div>
      <div className={props.step3 ? 'active' : ''}>אמצעי תשלום</div>
      <div className={props.step4 ? 'active' : ''}>אישור סופי</div>
    </div>
  );
};

export default CheckoutSteps;
