import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen d-flex flex-column align-items-start justify-content-start">
      <h1 className="load display-1">LOADING</h1>
      <h2 className="bootsys display-4">BOOTING SYSTEM...</h2>
      <ul className="system-check list-unstyled">
        <li>Commencing System Check</li>
        <li>Memory Unit: Green</li>
        <li>Initializing OS: Arch Linux</li>
        <li>Loading Steam Profile Data</li>
        <li>Vitals: Green</li>
        <li>Remaining MP: 100%</li>
        <li>CPU Temperature: Normal</li>
        <li>Fan Speed: Normal</li>
        <li>Activating G</li>
      </ul>
    </div>
  );
};

export default LoadingScreen;
