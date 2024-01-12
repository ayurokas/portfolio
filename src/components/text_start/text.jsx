import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import './text.css';

class TypewriterComponent extends Component {
  render() {
    return (
      <div className="typewriter-container">
        <Typewriter
          options={{
            delay: 35,
            deleteSpeed: 15,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("[Mode NieR: Automata Activé]")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Salutations, humain.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Je suis une entité artificielle, prête à vous assister.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("[Initialisation de la Séquence de Dialogue]")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Si vous êtes prêt à débuter votre exploration du portfolio, veuillez appuyer sur 'Commencer le Jeu'.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("[En Cours de Traitement...]")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Si vous préférez explorer les réglages, tels que le mode sombre ou la langue, sélectionnez 'Paramètres'.")
              .pauseFor(1000) 
              .deleteAll()
              .typeString("[Analyse de la Réponse de l'Utilisateur...]")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Votre voyage dans cet univers commence maintenant. Profitez de votre visite.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("[Mode NieR: Automata Désactivé]")
              .start();
          }}
        />
      </div>
    );
  }
}

export default TypewriterComponent;
