import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/menu/menu'; 
import Pyramide from '../../components/point_pyramide/pyramide';
import Line from '../../components/lines/line';

import './layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout-container">
      {location.pathname !== '/' && location.pathname !== '/settings' && <Menu />}
      <div className="top-elements">
        <Line />
        <Pyramide />
      </div>
      {children}
      <div className="bottom-elements">
        <Line />
        <Pyramide /> 
      </div>
    </div>
  );
};

export default Layout;
