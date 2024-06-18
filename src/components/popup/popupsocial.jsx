import React, { useState } from 'react';
import { animated } from '@react-spring/web';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import './popup.css';

function SocialMediaPopup({ style }) {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <animated.div style={{ ...style, bottom: '230px', right: '20px' }} className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <span>ERROR</span>
          <FaTimes className="close-icon" onClick={closePopup} />
        </div>
        <div className="popup-content">
          <p>
            <a href="https://github.com/ayurokas" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} /> GitHub
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/elisa-renuy/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </animated.div>
  );
}
export default SocialMediaPopup;
