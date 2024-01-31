import React, { useState, useEffect } from "react";
import "./hello.css"; 
import imageNormale from "../../assets/hello.png"; // Image de base avec le bras baissé

const CoucouImage = () => {
  const [isCoucouVisible, setIsCoucouVisible] = useState(false);

  useEffect(() => {
    // Utilisez un effet pour déclencher l'animation après le chargement de la page
    setIsCoucouVisible(true);
  }, []);

  return (
    <div className={`coucou-container ${isCoucouVisible ? "coucou-visible" : ""}`}>
      <img
        src={imageNormale}
        alt="Chien jouant dans un parc en été"
        className="image-normale"
      />
    </div>
  );
};

export default CoucouImage;