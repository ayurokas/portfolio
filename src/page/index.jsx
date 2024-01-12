import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import TextComponent from './../components/text_start/text';


function Home() {
  return (
    <div className="custom-container">
      <h1 className="text-embossed">
        START MENU
      </h1>
      <div className="text-component-class">
        <TextComponent/> 
      </div>
      <div className="button-container">
        <div className="custom-button">
          <Link to="/portfolio">
            <span className="line-above"></span> 
            <span className="color_text">Start Games</span>           
            <span className="line-below"></span> 
          </Link>
        </div>
        <div className="custom-button">
          <Link to="/settings">
            <span className="line-above"></span> 
            <span className="color_text">Settings</span>           
            <span className="line-below"></span> 
          </Link>
        </div>
      </div>
      <div className="cursor-select"></div>
    </div>
  );
}

export default Home;
