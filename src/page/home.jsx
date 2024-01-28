import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/loading_page/loading'; 
import GlitchText from '../components/glicht/glicht';
import TextComponent from './../components/text_start/text';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile'); 
    }, 1100); 
  };

  return (
    <div className="custom-container">
      <GlitchText text="START MENU" />
      <div className="text-component-class">
        <TextComponent/> 
      </div>
      <div>
        {isLoading && <LoadingScreen />}
        <div className="button-container">
          <div className="custom-button">
          <span className="line-above"></span>
            {isLoading ? (
              <div>Chargement en cours...</div>
            ) : (
              <button className="color_text-button" onClick={handleStartClick}>
                COMMENCER
              </button>
            )}
            <span className="line-below"></span>
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
    </div>
  );
}

export default Home;
