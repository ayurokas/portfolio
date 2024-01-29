import React from 'react';
import GlitchText from '../components/glicht/glicht';
import '../css/projet.css';
import imgprojet from '../assets/machine_head.png'; 


const saves = [
  { 
    name: 'BOOKI', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet
  },
];

const SaveScreen = () => {
  return (
    <>
      <div className="custom-container">
        <GlitchText text="LES PROJETS" />
      </div>
      <div className="save-screen">
      <div className="scroll-container"> {/* Ce conteneur aura la barre de défilement */}
        {saves.map((save, index) => (
          <div className="save-slot" key={index}>
            <img src={save.imagePath} alt={`${save.name} project`} className="save-image" />
            <div className="slot-content">
              <div className="slot-header">
                <span className="save-name">{save.name}</span>
                <span className="save-date">{save.date}</span>
              </div>
              <div className="slot-details">
                <span className="slot-language">{`Langage: ${save.langage}`}</span>
                <span className="play-time">{`Play Time: ${save.playTime}`}</span>
              </div>
            </div>
          </div>  
        ))}
        </div>  
      </div>
    </>
  );
};
export default SaveScreen;