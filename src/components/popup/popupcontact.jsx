import React, { useState } from 'react';
import { animated } from '@react-spring/web';
import { FaTimes } from 'react-icons/fa';

import './popup.css';

function ContactInfoPopup({ style }) {
    const [isVisible, setIsVisible] = useState(true);
  
    const closePopup = () => {
      setIsVisible(false);
    };
  
    if (!isVisible) return null;
  return (
    <animated.div style={{ ...style, bottom: '95px', right: '20px' }} className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <span>SYSTEME ERROR</span>
          <FaTimes className="close-icon" onClick={closePopup} />
        </div>
        <div className="popup-content">
          <p>Email: Elisa.renuy@gmail.com</p>
          <p>Phone: 069953716</p>
        </div>
      </div>
    </animated.div>
  );
}

export default ContactInfoPopup;
