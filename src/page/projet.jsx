import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import GlitchText from '../components/glicht/glicht';
import '../css/projet.css';
import imgprojet from '../assets/machine_head.png'; 
import Cross from '../assets/close.png';

const saves = [
  { 
    name: 'BOOKI', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css',
    title :'Transformez une maquette en site web avec HTML & CSS',
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
    imagePath: imgprojet,
    url :'https://ayurokas.github.io/OhMyFood/'
  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',

  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',

  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',

  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',

  },
  { 
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage : 'html, css, javascript',
    imagePath: imgprojet,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',

  },
  

];
const SaveScreen = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const projectDetailsRef = useRef(null); 

  const handleProjectClick = (project) => {
    if (selectedProject) {
      setShowDetails(false);

      setTimeout(() => {
        setSelectedProject(project);
        setShowDetails(true);
      }, 300);
    } else {
      setSelectedProject(project);
      setShowDetails(true);
    }
  };

  const openProjectInNewTab = (projectUrl) => {
    window.open(projectUrl, '_blank');
  };

  const handleCloseClick = () => {
    setShowDetails(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 200);
  };

  return (
    <>
      <div className="custom-container">
        <GlitchText text="LES PROJETS" />
      </div>
      <div className="save-screen">
        <div className="scroll-container">
          {saves.map((save, index) => (
            <div
              className={`save-slot ${selectedProject === save ? 'selected-slot' : ''}`}
              key={index}
              onClick={() => handleProjectClick(save)}
            >
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
        <CSSTransition
          in={showDetails}
          timeout={300}
          classNames="project-details-animation"
          unmountOnExit
          onExited={() => setSelectedProject(null)}
          nodeRef={projectDetailsRef} // Utilisez la référence projectDetailsRef
        >
          <div className="project-details" ref={projectDetailsRef}>
            {selectedProject && (
              <>
                <div className="project-title">
                  {selectedProject.name}
                  <img src={Cross} alt="Close" className="close-button" onClick={handleCloseClick} />
                </div>
                <div className="project-content">
                  <p className="project-intitule">{selectedProject.title}</p>
                  <p className="project-desciption">
                    {selectedProject.description.split('\n').map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <button
                    className="project-button"
                    onClick={() => openProjectInNewTab(selectedProject.url)}
                  >
                    Voir le projet
                  </button>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default SaveScreen;