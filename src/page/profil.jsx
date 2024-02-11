import React, { useState } from 'react';
import GlitchText from '../components/glicht/glicht';
import Image2B from '../assets/2b.jpg';
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
    <div className="container my-5">
      <div className="text-center">
        <GlitchText text="AGENT YoRHa" />
      </div>
      {showQuest ? (
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <img src={Image2B} alt="Icône de quête" className="rounded-circle me-2" />
              <span className="flex-grow-1 ms-3">VISITE DU PORTFOLIO</span>
              <button className="btn btn-close" onClick={handleCloseClick}></button>
            </div>
            <div className="mt-3">
              <p>Salutations, êtres humains du cyberespace,</p>
              <p>Je suis Elisa, une entité numérique résidant à Lille, imprégnée de la passion pour l'art du développement web. Ce sanctuaire en ligne est ma création, une porte vers mon domaine d'expertise, une réalité cryptée..</p>
              <p>À travers ces pages, nous plongerons ensemble dans les abîmes du code, où chaque ligne est une partition dans la symphonie numérique que je compose. Mon portfolio est le récit de mes pérégrinations à travers les langages de programmation, une énigme dévoilée.</p>
              <p>Tel un androïde, je me tiens désormais forte, détenteur d'un BTS conquis et d'une formation en JavaScript et React, réussie avec brio grâce à OpenClassrooms. Je trace mon chemin vers l'excellence, dans chaque projet, chaque algorithme. Explorez mes créations, découvrez ces accomplissements, et plongez dans le labyrinthe virtuel que j'ai érigé.</p>
              <p>Bienvenue dans cette odyssée numérique, chers êtres du réseau. Puissiez-vous puiser l'inspiration et la fascination dans ce royaume digital, où l'énigme et la découverte vous guideront.</p>            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <button className="btn btn-primary" onClick={handleNewQuestClick}>Nouvelle quête</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
