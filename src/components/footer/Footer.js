import React from 'react';
import { useHistory } from 'react-router';

import './Footer.css';

const Footer = () => {
  const history = useHistory();

  return (
    <div className="footer-container">
      <div className="detail-container">
        <div className="footer-contact-us-container">
          <div className="contact-us-title">צור קשר</div>
          <div className="contact-phoneNumber">מספר לווצאפ: 053-3555309</div>
          <div className="contact-email">אימייל: oini@gmail.com</div>
        </div>
      </div>
      <div
        className="contact-us-title-takanon"
        onClick={() => {
          history.push('/takanon');
        }}
      >
        תקנון האתר
      </div>
      <div className="footer-reserve">© כל הזכויות שמורות ל- OiNi</div>
    </div>
  );
};

export default Footer;
