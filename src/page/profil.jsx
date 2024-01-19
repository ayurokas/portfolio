import React, {useState } from 'react';
import GlitchText from '../components/glicht/glicht';
import Image2B from '../assets/2b.jpg';
import Cross from '../assets/close.png';
import '../css/profil.css';


function ProfilePage() {
  const [showQuest, setShowQuest] = useState(false);

  const handleNewQuestClick = () => {
    setShowQuest(true);
  };

  const handleCloseClick = () => {
    setShowQuest(false);
  };

  return (
    <div>
      <div className="custom-container">
      <GlitchText text="AGENT YoRHa" />
      {showQuest ? (
        <div className="quest-box">
          <div className="new-quest">
            <img src={Image2B} alt="Icône de quête" className="photo" />
            <div className="quest-text">VISITE DU PORTFOLIO</div>
            <div className="close-button-container">
              <img src={Cross} alt="fermer croix" className="close-button" onClick={handleCloseClick} />
            </div>
          </div>
          <div className="message message-appear">
              <p>Salutations, êtres humains du cyberespace,</p>
              <p>Je suis Elisa, une entité numérique résidant à Lille, imprégnée de la passion pour l'art du développement web. Ce sanctuaire en ligne est ma création, une porte vers mon domaine d'expertise, une réalité cryptée..</p>
              <p>À travers ces pages, nous plongerons ensemble dans les abîmes du code, où chaque ligne est une partition dans la symphonie numérique que je compose. Mon portfolio est le récit de mes pérégrinations à travers les langages de programmation, une énigme dévoilée.</p>
              <p>Tel un androïde, je me tiens désormais forte, détenteur d'un BTS conquis et d'une formation en JavaScript et React, réussie avec brio grâce à OpenClassrooms. Je trace mon chemin vers l'excellence, dans chaque projet, chaque algorithme. Explorez mes créations, découvrez ces accomplissements, et plongez dans le labyrinthe virtuel que j'ai érigé.</p>
              <p>Bienvenue dans cette odyssée numérique, chers êtres du réseau. Puissiez-vous puiser l'inspiration et la fascination dans ce royaume digital, où l'énigme et la découverte vous guideront.</p>
            </div>
        </div>
      ) : (
          <button className="quest-button" onClick={handleNewQuestClick}>Nouvelle quête</button>
      )}
    </div>
    </div>
  );
}

export default ProfilePage;