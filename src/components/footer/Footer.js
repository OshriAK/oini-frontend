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
          <div className="contact-phoneNumber">
            <i className="fab fa-whatsapp"></i>
            <div>ווצאפ בלבד: 053-3555309</div>
          </div>
          <div className="contact-email">
            <i className="fas fa-envelope-square"></i>
            <div>אימייל: oini@gmail.com</div>
          </div>
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
