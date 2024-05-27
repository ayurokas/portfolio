import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/loading_page/loading'; 
import GlitchText from '../components/glicht/glicht';
import TextComponent from './../components/text_start/text';
import '../css/home.css';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowButtons(true); 
    }, 1000); 

    const timer2 = setTimeout(() => {
      setShowSecondButton(true); 
    }, 2000);
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleStartClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile'); 
    }, 1100); 
  };

  return (
    <div className="container my-5">
      <div className="text-center">
        <GlitchText text="START MENU" />
        <div className="mt-4">
          <TextComponent/> 
        </div>
        {isLoading && <LoadingScreen />}
        <div className={`mt-3 ${showButtons ? 'show' : ''}`}>
          {showButtons && ( 
            <button className={`custom-button ${showButtons ? 'show' : ''}`} onClick={handleStartClick}>
              {isLoading ? "Chargement en cours..." : "COMMENCER"}
              <span className="black-square"></span>
            </button>
          )}
        </div>
        <div className={`mt-4 ${showSecondButton ? 'show' : ''}`}>
          {showSecondButton && ( 
            <Link to="/settings" className={`custom-button ${showSecondButton ? 'show' : ''}`}>
              PARAMÈTRE
              <span className="black-square"></span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
