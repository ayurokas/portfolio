import React from 'react';
import './menu.css'; 
import { NavLink, useLocation } from 'react-router-dom'; 
import arrow from '../../assets/arrow.png';

function Menu() {
    const location = useLocation(); // Obtenez l'URL actuelle

    // Fonction pour déterminer si le lien est actif en fonction de l'URL
    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <div>
            <div className="menu-container">
                <ul className="menu">
                    <div className="back-arrow" onClick={() => {window.location.href = '/';}}>
                        <img src={arrow} alt="Back to home" />
                    </div>
                    <li className="menu-item">
                        <NavLink to="/profile" className={getNavLinkClass('/profile')}>
                            <span className="line-above"></span> 
                            PROFIL
                            <span className="line-below"></span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/projet" className={getNavLinkClass('/projet')}>
                            <span className="line-above"></span>
                            PROJET
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/competence" className={getNavLinkClass('/competence')}>
                            <span className="line-above"></span>
                            COMPÉTENCE
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/social" className={getNavLinkClass('/social')}>
                            <span className="line-above"></span>
                            SOCIAL
                            <span className="line-below"></span> 
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/contact" className={getNavLinkClass('/contact')}>
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
