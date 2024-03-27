import React, { useState } from 'react';
import GlitchText from '../components/glicht/glicht';
import Image2B from '../assets/2b.jpg';
import Image9s from '../assets/9s.png';

import '../css/profil.css';

function ProfilePage() {
  const [showOverlay, setShowOverlay] = useState(false); // État pour contrôler l'affichage de l'overlay
  const [selectedQuest, setSelectedQuest] = useState(null); // État pour stocker la quête sélectionnée

  const handleNewQuestClick = (quest) => {
    setSelectedQuest(quest);
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
    setSelectedQuest(null);
  };

  return (
    <div className="container my-5 text-center">
      <div className="text-center">
        <GlitchText text="AGENT YoRHa" />
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="quest-container">
            <h2 className="quest-title">QUETES PRINCIPALES</h2>
            <div className="mt-2">
              <button className="custom-button-quest" onClick={() => handleNewQuestClick('mainQuest1')}>À la rencontre d'Elisa</button>
            </div>
            <div className="mt-2">
              <button className="custom-button-quest" onClick={() => handleNewQuestClick('mainQuest2')}>Visite du Portfolio</button>
            </div>
            <div className="mt-2">
                <button className="custom-button-quest" disabled>Quête pas encore disponible</button>
                </div>
                <div className="mt-2">
                      <button className="custom-button-quest" disabled>Quête pas encore disponible</button>
                </div>
                <div className="mt-2">
                      <button className="custom-button-quest" disabled>Quête pas encore disponible</button>
                </div>
                <div className="mt-2">
                      <button className="custom-button-quest" disabled>Quête pas encore disponible</button>
                </div>        
                </div>
              </div>
              <div className="col">
                <div className="quest-container">
                  <h2 className="quest-title">QUETE SECONDAIRE</h2>
                  <div className="mt-2">
                    <button className="custom-button-quest" onClick={() => handleNewQuestClick('secondaryQuest')}>Nouvelle quête secondaire</button>
                  </div>
                </div>
              </div>
            </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="overlay-content">
            <div className="card">
              <div className="card-body">
                {selectedQuest === 'mainQuest1' && (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <img src={Image2B} alt="Icône de quête" className="rounded-circle me-2" />
                      <span className="flex-grow-1 ms-3">À LA RENCONTRE D'ELISA</span>
                      <button className="btn btn-close" onClick={handleCloseClick}></button>
                    </div>
                    <div className="mt-3">
                    <p>Dans cette quête, les joueurs sont invités à explorer le monde d'Elisa, une développeuse passionnée vivant à Villeneuve d'Ascq. À l'âge de 27 ans, Elisa a déjà un parcours remarquable, ayant obtenu un BTS Services Informatiques aux Organisations (SIO) avec une spécialisation en Solutions Logicielles et Applications Métiers (SLAM), ainsi qu'une formation en JavaScript et React en alternance chez EOS France pendant son BTS SIO.</p>
                    <p>Récompenses :</p>
                      <p>En entreprenant cette quête, les joueurs découvrent le parcours et les compétences impressionnantes d'Elisa en développement informatique.</p>
                      <p>Ils gagnent une appréciation pour son dévouement à l'apprentissage et à l'amélioration continue.</p>
                      <p>De plus, ils peuvent être inspirés par le succès d'Elisa dans le domaine de la technologie et envisager leurs propres aspirations professionnelles.</p>
                  </div>
                  </>
                )}
                {selectedQuest === 'mainQuest2' && (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <img src={Image9s} alt="Icône de quête" className="rounded-circle me-2" />
                      <span className="flex-grow-1 ms-3">VISITE DU PORTFOLIO</span>
                      <button className="btn btn-close" onClick={handleCloseClick}></button>
                    </div>
                    <div className="mt-3">
                        <p>Dans cette quête, les joueurs sont recrutés pour explorer un portfolio numérique renfermant des données cruciales sur une technologie révolutionnaire. Ce portfolio est protégé par des défenses virtuelles sophistiquées, nécessitant une expertise pour accéder à son contenu. Les joueurs doivent naviguer à travers ces défenses, surmonter les obstacles technologiques et infiltrer le portfolio pour récupérer les informations précieuses qu'il contient.</p>
                        <p>Récompenses :</p>
                        <p>En réussissant à explorer le portfolio et à récupérer les données sur la technologie révolutionnaire, les joueurs obtiennent un accès exclusif à ces informations.</p>
                        <p>Ces données peuvent leur fournir un avantage stratégique dans le monde virtuel où ils évoluent, ainsi qu'une reconnaissance pour leur compétence et leur bravoure dans la résolution de problèmes technologiques complexes.</p>
                     </div>
                  </>
                )}
                {selectedQuest === 'secondaryQuest' && (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <img src={Image2B} alt="Icône de quête" className="rounded-circle me-2" />
                      <span className="flex-grow-1 ms-3">AUTRE QUETE</span>
                      <button className="btn btn-close" onClick={handleCloseClick}></button>
                    </div>
                    <div className="mt-3">
                    <p>Description de la quête secondaire</p>
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
