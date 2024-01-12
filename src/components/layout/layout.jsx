import React from 'react';
import Pyramide from '../../components/point_pyramide/pyramide';
import Line from '../../components/lines/line';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="top-elements">
        <Line/>
        <Pyramide />
      </div>
      {children}
      <div className="bottom-elements">
      <Line />
        <Pyramide/> 
      </div>
    </div>
  );
};

export default Layout;
