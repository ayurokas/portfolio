import React, { useState, useEffect } from 'react';
import './menu.css';
import { NavLink, useLocation } from 'react-router-dom';
import arrow from '../../assets/arrow.png';


function Menu() {
    const location = useLocation();
    const [clickedLink, setClickedLink] = useState(location.pathname);

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    const handleNavLinkClick = (event, path) => {
        setClickedLink(path); 
    };

    useEffect(() => {
        setClickedLink(location.pathname);
    }, [location]);

    return (
        <div className="menu-container">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={() => { window.location.href = '/'; }}>
                        <img src={arrow} alt="Back to home"/>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${clickedLink === '/profile' ? 'active' : ''}`}>
                                <NavLink to="/profile" className={getNavLinkClass('/profile')} onClick={(e) => handleNavLinkClick(e, '/profile')}>
                                    <span className="line-above"></span>
                                    PROFIL
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${clickedLink === '/projet' ? 'active' : ''}`}>
                                <NavLink to="/projet" className={getNavLinkClass('/projet')} onClick={(e) => handleNavLinkClick(e, '/projet')}>
                                    <span className="line-above"></span>
                                    PROJET
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${clickedLink === '/competence' ? 'active' : ''}`}>
                                <NavLink to="/competence" className={getNavLinkClass('/competence')} onClick={(e) => handleNavLinkClick(e, '/competence')}>
                                    <span className="line-above"></span>
                                    COMPÉTENCE
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${clickedLink === '/social' ? 'active' : ''}`}>
                                <NavLink to="/social" className={getNavLinkClass('/social')} onClick={(e) => handleNavLinkClick(e, '/social')}>
                                    <span className="line-above"></span>
                                    SOCIAL
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${clickedLink === '/contact' ? 'active' : ''}`}>
                                <NavLink to="/contact" className={getNavLinkClass('/contact')} onClick={(e) => handleNavLinkClick(e, '/contact')}>
                                    <span className="line-above"></span>
                                    CONTACT
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
