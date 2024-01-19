import React from 'react';
import GlitchText from '../components/glicht/glicht';
import { Link} from 'react-router-dom';


const SettingsPage = () => {
  return (
    <div className="custom-container">    
      <GlitchText text="PARAMETRE" />
      <div className="button-container">
        <div className="custom-button">
          <Link to="/portfolio">
            <span className="line-above"></span> 
            <span className="color_text">MODE</span>           
            <span className="line-below"></span> 
          </Link>
        </div>
        <div className="custom-button">
          <Link to="/settings">
            <span className="line-above"></span> 
            <span className="color_text">LANGUE</span>           
            <span className="line-below"></span> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
