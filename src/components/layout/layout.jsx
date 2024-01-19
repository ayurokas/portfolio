import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/menu/menu'; 
import './layout.css'; 

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="page-container">
      <header>
      {location.pathname !== '/' && location.pathname !== '/settings' && <Menu />}
      <div className="background-image-top"></div>
      </header>
      <div className="content">
        {children}
      </div>
      <footer>
      <div className="background-image-bottom"></div>
          <p>inspired by Nier Automata</p>
          <p>Copyright @ Elisa Renuy </p>
      </footer>
    </div>
  );
};

export default Layout;
