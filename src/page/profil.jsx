import React, { useState, useEffect } from 'react';
import GlitchText from '../components/glicht/glicht';
import Image2B from '../assets/2b.jpg';
import Image9s from '../assets/9s.png';
import useIsMobile from '../components/mobile/mobile';
import '../css/profil.css';

function ProfilePage() {
  const isMobile = useIsMobile(); // Utilisation du hook pour détecter la taille de l'écran
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [showTitles, setShowTitles] = useState(false);
  const [shownButtons, setShownButtons] = useState({ main: [], secondary: [] });

  const quests = {
    main: [
      {
        id: 'mainQuest1',
        label: "À la rencontre d'Elisa",
        available: true,
        image: Image2B,
        description: `Dans cette quête, les joueurs sont invités à explorer le monde d'Elisa, une développeuse passionnée vivant à Villeneuve d'Ascq. À l'âge de 27 ans, Elisa a déjà un parcours remarquable, ayant obtenu un BTS Services Informatiques aux Organisations (SIO) avec une spécialisation en Solutions Logicielles et Applications Métiers (SLAM), ainsi qu'une formation en JavaScript et React en alternance chez EOS France pendant son BTS SIO.
          <br>Récompenses :<br>
          En entreprenant cette quête, les joueurs découvrent le parcours et les compétences impressionnantes d'Elisa en développement informatique.<br>
          Ils gagnent une appréciation pour son dévouement à l'apprentissage et à l'amélioration continue.<br>
          De plus, ils peuvent être inspirés par le succès d'Elisa dans le domaine de la technologie et envisager leurs propres aspirations professionnelles.`
      },
      {
        id: 'mainQuest2',
        label: "Visite du Portfolio",
        available: true,
        image: Image9s,
        description: `Dans cette quête, les joueurs sont recrutés pour explorer un portfolio numérique renfermant des données cruciales sur une technologie révolutionnaire. Ce portfolio est protégé par des défenses virtuelles sophistiquées, nécessitant une expertise pour accéder à son contenu. Les joueurs doivent naviguer à travers ces défenses, surmonter les obstacles technologiques et infiltrer le portfolio pour récupérer les informations précieuses qu'il contient.
          <br>Récompenses :<br>
          En réussissant à explorer le portfolio et à récupérer les données sur la technologie révolutionnaire, les joueurs obtiennent un accès exclusif à ces informations.<br>
          Ces données peuvent leur fournir un avantage stratégique dans le monde virtuel où ils évoluent, ainsi qu'une reconnaissance pour leur compétence et leur bravoure dans la résolution de problèmes technologiques complexes.`
      },
      { id: 'mainQuestInvalid1', label: "Quête pas encore disponible", available: false },
      { id: 'mainQuestInvalid2', label: "Quête pas encore disponible", available: false },
      { id: 'mainQuestInvalid3', label: "Quête pas encore disponible", available: false },
    ],
    secondary: [
      {
        id: 'secondaryQuest',
        label: "Contact ?",
        available: true,
        image: Image2B,
        description: "Description de la quête secondaire"
      },
      { id: 'secondaryQuestInvalid1', label: "Quête pas encore disponible", available: false },
      { id: 'secondaryQuestInvalid2', label: "Quête pas encore disponible", available: false },
    ]
  };

  useEffect(() => {
    const showQuestButtons = (category, delayFactor) => {
      quests[category].forEach((_, index) => {
        setTimeout(() => {
          setShownButtons((prevState) => ({
            ...prevState,
            [category]: [...prevState[category], index],
          }));
        }, delayFactor * (index + 1));
      });
    };

    if (!isMobile) {
      showQuestButtons('main', 1000);
      showQuestButtons('secondary', 1000);
      setTimeout(() => setShowTitles(true), 1000);
    } else {
      setShownButtons({
        main: quests.main.map((_, index) => index),
        secondary: quests.secondary.map((_, index) => index),
      });
      setShowTitles(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const handleNewQuestClick = (quest) => {
    setSelectedQuest(quest);
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
    setSelectedQuest(null);
  };

  const renderQuests = (category) => {
    return quests[category].map((quest, index) => (
      <div key={quest.id} className="mt-2">
        {shownButtons[category].includes(index) && (
          <button
            className={`custom-button-quest ${!isMobile ? (quest.available ? 'button-animation' : 'button-animation_secondary') : ''}`}
            onClick={() => quest.available && handleNewQuestClick(quest.id)}
            disabled={!quest.available}
          >
            {quest.label}
          </button>
        )}
      </div>
    ));
  };

  const getQuestDetails = (questId) => {
    const quest = quests.main.find((q) => q.id === questId) || quests.secondary.find((q) => q.id === questId);
    return quest ? (
      <>
        <div className="d-flex align-items-center justify-content-between">
          <img src={quest.image} alt="Icône de quête" className="rounded-circle me-2" />
          <span className="flex-grow-1 ms-3">{quest.label}</span>
          <button className="btn btn-close" onClick={handleCloseClick}></button>
        </div>
        <div className="mt-3">
          <p dangerouslySetInnerHTML={{ __html: quest.description }}></p>
        </div>
      </>
    ) : null;
  };

  return (
    <div className="container my-5 text-center">
      <div className="text-center">
        <GlitchText text="AGENT YoRHa" />
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="quest-container">
            {showTitles && <h2 className="quest-title">QUETES PRINCIPALES</h2>}
            {renderQuests('main')}
          </div>
        </div>
        <div className="col">
          <div className="quest-container">
            {showTitles && <h2 className="quest-title secondary">QUETE SECONDAIRE</h2>}
            {renderQuests('secondary')}
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="overlay-content">
            <div className="card">
              <div className="card-body">
                {selectedQuest && getQuestDetails(selectedQuest)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
