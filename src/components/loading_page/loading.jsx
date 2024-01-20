import React from 'react';
import './loading.css';

const LoadingScreen = () => {

    return (
        <div className="loading-screen">
          <h1 className='load'>LOADING</h1>
          <h2 className='bootsys'>BOOTING SYSTEM...</h2>
          <ul className="system-check">
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