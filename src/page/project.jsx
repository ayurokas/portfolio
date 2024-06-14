import React, { useState, useEffect } from 'react';
import '../css/project.css';
import ProjectCard from '../components/project/Project';
import GlitchText from '../components/glicht/glicht';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from '@react-spring/web';

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
      &rarr; 
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &larr;
    </div>
  );
};

const ProjectPage = () => {
  const [showCarousel, setShowCarousel] = useState(false);
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

  const fadeStyles = useSpring({
    opacity: showCarousel ? 1 : 0,
    transform: showCarousel ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container text-center my-5 project-page">
      <GlitchText text="LES PROJECTS" />
      <animated.div style={fadeStyles} className="d-flex flex-column justify-content-center align-items-center">
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
      </animated.div>
    </div>
  );
};

export default ProjectPage;
