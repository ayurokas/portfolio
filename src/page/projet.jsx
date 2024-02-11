import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import GlitchText from '../components/glicht/glicht';
import '../css/projet.css';
import image from '../assets/machine_head.png';

const saves = [
  { 
    id: 1,
    name: 'BOOKI', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css',
    title: 'Transformez une maquette en site web avec HTML & CSS',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
    url: 'https://ayurokas.github.io/OhMyFood/'
  },
  { 
    id: 2,
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css, javascript',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
  },
  { 
    id: 4,
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css, javascript',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
  },
  { 
    id: 3,
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css, javascript',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
  },
  { 
    id: 5,
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css, javascript',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
  },
  { 
    id: 6,
    name: 'OhMyFood', 
    date: '30/12/2022', 
    playTime: '730:45:25', 
    langage: 'html, css, javascript',
    imagePath: image,
    description: 'Ce projet consiste à créer un site Web fictif de voyage qui permettra aux utilisateurs de découvrir des destinations exotiques et de planifier leurs aventures.\nL\'objectif est de mettre en pratique les compétences en développement web acquises en cours.\nVous devrez concevoir et coder les pages du site, y compris la page d\'accueil, les pages de destination, et la page de planification du voyage pour les versions desktop, mobile et tablette.\nLe projet inclut également la création de fichiers HTML, CSS et l\'intégration d\'images pour illustrer les destinations.\nCe projet d\'école sera évalué en fonction de la qualité de la conception de l\'interface utilisateur, de la mise en page, de la convivialité, et de la conformité aux bonnes pratiques de développement web.',
  },
];

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <ListGroup className="mt-5 custom-list custom-scrollbar">
      {projects.map(project => (<ListGroup.Item key={project.id} action onClick={() => onSelectProject(project)} className="mb-3 list-item" > 
      <Row className="align-items-center">
    <Col xs={4} md={3} className="d-flex justify-content-center"> {/* Ajustement de la largeur de la colonne */}
      <img src={project.imagePath} alt="Project" className="project-image" />
    </Col>
    <Col>
      <Row>
        <Col xs={8} md={6} className="header text-start">{project.name}</Col>
        <Col xs={4} md={3} className="header text-end">{project.date}</Col>
      </Row>
      <Row>
        <Col xs={8} md={6} className="text-start">{project.langage}</Col>
        <Col xs={4} md={3} className="text-end">{project.playTime}</Col>
      </Row>
    </Col>
  </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
const Project = ({ project, onClose }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" onClick={() => window.open(project.url, '_blank')}>
          Accéder au projet
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </Card.Body>
    </Card>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <Container fluid> 
      <div className="text-center">
        <GlitchText text="LES PROJETS" /> 
      </div>
      <Row className="justify-content-start mt-4"> 
        <Col md={4}>
          <ProjectList projects={saves} onSelectProject={handleSelectProject} />
        </Col>
        <Col md={8}>
          {selectedProject && (
            <Project project={selectedProject} onClose={handleCloseProject} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;