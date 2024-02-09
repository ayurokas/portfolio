import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/menu/menu'; 
import './layout.css'; 

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        {location.pathname !== '/' && location.pathname !== '/settings' && <Menu />}
        <div className="background-image-top"></div>
      </header>
      <main className="flex-fill">
        {children}
      </main>
      <footer className="text-center text-dark py-3">
        <div className="background-image-bottom"></div>
        <p>Inspired by Nier Automata</p>
        <p>Copyright © Elisa Renuy 2021</p>
      </footer>
    </div>
  );
};

export default Layout;
