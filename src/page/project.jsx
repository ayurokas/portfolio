import React from 'react';
import '../css/project.css';
import ProjectCard from '../components/project/Project';
import GlitchText from '../components/glicht/glicht';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

// Liste des projets
const projects = [
  { title: 'Projet 1', description: 'BIENTOT DISPONIBLE', features: [], technologies: [] },
  { title: 'Projet 2', description: 'BIENTOT DISPONIBLE', features: [], technologies: [] },
  { title: 'Projet 3', description: 'BIENTOT DISPONIBLE', features: [], technologies: [] },
  { title: 'Projet 4', description: 'BIENTOT DISPONIBLE', features: [], technologies: [] },
  { title: 'Projet 5', description: 'BIENTOT DISPONIBLE', features: [], technologies: [] }
];

// Composants de flèches personnalisées
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &rarr; {/* Flèche droite */}
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &larr; {/* Flèche gauche */}
    </div>
  );
};

const ProjectPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="container text-center my-5 project-page">
      <GlitchText text="LES PROJECTS" />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="row mt-4 w-100">
          <div className="col">
            <div className="slider-container">
              <Slider {...settings}>
                {projects.map((project, index) => (
                  <div key={index} className="p-3">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
