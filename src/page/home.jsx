import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/loading_page/loading'; 
import GlitchText from '../components/glicht/glicht';
import TextComponent from './../components/text_start/text';
import '../css/home.css';


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
    <div className="container my-5">
      <div className="text-center">
        <GlitchText text="START MENU" />
        <div className="mt-4">
          <TextComponent/> 
        </div>
        {isLoading && <LoadingScreen />}
        <div className="mt-3">
          <button className="custom-button" onClick={handleStartClick}>
            {isLoading ? "Chargement en cours..." : "COMMENCER"}

            <span className="black-square"></span>
          </button>
        </div>
        <div className="mt-4">
        <Link to="/settings" className="custom-button">
          PARAMÈTRE
          <span className="black-square"></span>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

