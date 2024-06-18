import React, { useState, useEffect, useCallback } from 'react';
import './menu.css';
import { NavLink, useLocation } from 'react-router-dom';
import arrow from '../../assets/arrow.png';

function Menu() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleResize = useCallback(() => {
        if (window.innerWidth > 1024 && showModal) {
            setShowModal(false);
        }
    }, [showModal]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    return (
        <div className="menu-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={() => { window.location.href = '/'; }}>
                        <img src={arrow} alt="Back to home" />
                    </div>
                    <button className="navbar-toggler d-lg-none" type="button" onClick={toggleModal}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                                <NavLink to="/profile" className={getNavLinkClass('/profile')}>
                                    <span className="line-above"></span>
                                    PROFIL
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/project' ? 'active' : ''}`}>
                                <NavLink to="/project" className={getNavLinkClass('/project')}>
                                    <span className="line-above"></span>
                                    PROJET
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/competence' ? 'active' : ''}`}>
                                <NavLink to="/competence" className={getNavLinkClass('/competence')}>
                                    <span className="line-above"></span>
                                    COMPÉTENCE
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <NavLink to="/contact" className={getNavLinkClass('/contact')}>
                                    <span className="line-above"></span>
                                    CONTACT
                                    <span className="line-below"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showModal && (
                <div className="menu-modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <ul className="navbar-nav">
                            <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                                <NavLink to="/profile" className={getNavLinkClass('/profile')} onClick={toggleModal}>
                                    PROFIL
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/project' ? 'active' : ''}`}>
                                <NavLink to="/project" className={getNavLinkClass('/project')} onClick={toggleModal}>
                                    PROJET
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/competence' ? 'active' : ''}`}>
                                <NavLink to="/competence" className={getNavLinkClass('/competence')} onClick={toggleModal}>
                                    COMPÉTENCE
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/social' ? 'active' : ''}`}>
                                <NavLink to="/social" className={getNavLinkClass('/social')} onClick={toggleModal}>
                                    SOCIAL
                                </NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <NavLink to="/contact" className={getNavLinkClass('/contact')} onClick={toggleModal}>
                                    CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
