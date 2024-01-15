import React, { useState } from 'react';
import './menu.css'; 
import arrow from '../../assets/arrow.png'


function Menu() {
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    const goToHomePage = () => {
        window.location.href = '/';
    };

    return (
        <div>
            <div className="menu-container">
                <ul className="menu">
                    <div className="back-arrow" onClick={goToHomePage}>
                        <img src={arrow} alt="Back to home" />
                    </div>
                    <li className={`menu-item ${activeMenuItem === 'about' ? 'active' : ''}`}>
                        <a href="#about" onClick={() => handleMenuItemClick('about')}>
                            <span className="line-above"></span> 
                            ABOUT
                            <span className="line-below"></span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeMenuItem === 'projet' ? 'active' : ''}`}>
                        <a href="#projet" onClick={() => handleMenuItemClick('projet')}>
                            <span className="line-above"></span>
                            PROJECTS
                            <span className="line-below"></span> 
                        </a>
                    </li>
                    <li className={`menu-item ${activeMenuItem === 'social' ? 'active' : ''}`}>
                        <a href="#social" onClick={() => handleMenuItemClick('social')}>
                            <span className="line-above"></span>
                            SOCIAL
                            <span className="line-below"></span> 
                        </a>
                    </li>
                    <li className={`menu-item ${activeMenuItem === 'contact' ? 'active' : ''}`}>
                        <a href="#contact" onClick={() => handleMenuItemClick('contact')}>
                            <span className="line-above"></span> 
                            CONTACT
                            <span className="line-below"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
