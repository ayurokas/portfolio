import React from 'react';
import { Link } from 'react-router-dom';
import TextComponent from './../components/text_start/text';
import GlitchText from '../components/glicht/glicht';

function Home() {
  return (
    <div className="custom-container">
      <GlitchText text="START MENU" />
      <div className="text-component-class">
        <TextComponent/> 
      </div>
      <div className="button-container">
        <div className="custom-button">
          <Link to="/profile">
            <span className="line-above"></span> 
            <button className="color_text-button">COMMENCER</button>
            <span className="line-below"></span> 
          </Link>
        </div>
        <div className="custom-button">
          <Link to="/settings">
            <span className="line-above"></span> 
            <button className="color_text-button">PARAMETTRE</button>
            <span className="line-below"></span> 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
