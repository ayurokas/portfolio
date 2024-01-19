import React from 'react';
import './menu.css'; 
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/arrow.png';

function Menu() {
    const goToHomePage = () => {
        window.location.href = '/';
    };

    const getNavLinkClass = (isActive) => {
        return isActive ? 'nav-link active' : 'nav-link';
    };

    return (
        <div>
            <div className="menu-container">
                <ul className="menu">
                    <div className="back-arrow" onClick={goToHomePage}>
                        <img src={arrow} alt="Back to home" />
                    </div>
                    <li className="menu-item">
                        <NavLink to="/profile" className={({ isActive }) => getNavLinkClass(isActive)}>
                            <span className="line-above"></span> 
                            PROFIL
                            <span className="line-below"></span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/projet" className={({ isActive }) => getNavLinkClass(isActive)}>
                            <span className="line-above"></span>
                            PROJET
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/competence" className={({ isActive }) => getNavLinkClass(isActive)}>
                            <span className="line-above"></span>
                            COMPETENCE
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/social" className={({ isActive }) => getNavLinkClass(isActive)}>
                            <span className="line-above"></span>
                            SOCIAL
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/contact" className={({ isActive }) => getNavLinkClass(isActive)}>
                            <span className="line-above"></span> 
                            CONTACT
                            <span className="line-below"></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;