import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ProgressBar, Carousel } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import GlitchText from '../components/glicht/glicht';
import '../css/skill.css';

const SkillsPage = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 767 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setShowSkills(true);
      setTimeout(() => {
        setShowProgress(true);
      }, 400);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skillsAnimation = useSpring({
    opacity: showSkills ? 1 : 0,
    transform: showSkills ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
  });

  const languages = [
    { name: 'HTML / CSS / SASS / Bootstrap ', percentage: 80 },
    { name: '.NET / C# / XAML', percentage: 75 },
    { name: 'JavaScript / React', percentage: 60 },
    { name: 'PHP', percentage: 55 },
    { name: 'Powershell', percentage: 25 },
    { name: 'Angular / Java / Spring Boot', percentage: 5 },
  ];

  const databases = [
    { name: 'MySQL', percentage: 45 },
    { name: 'MongoDB', percentage: 15 },
    { name: 'phpMyAdmin', percentage: 30 },
  ];

  const tools = [
    { name: 'Figma', percentage: 40 },
    { name: 'Visual Studio / Visual Studio Code', percentage: 50 },
    { name: 'Github', percentage: 30 },
  ];

  const operatingSystems = [
    { name: 'Windows', percentage: 50 },
    { name: 'Linux', percentage: 10 },
    { name: 'macOS', percentage: 15 },
  ];

  const categories = [
    { title: 'LANGUAGE', skills: languages },
    { title: 'BASE DE DONNÉES', skills: databases },
    { title: 'OUTILS', skills: tools },
    { title: 'SYSTÈME D\'EXPLOITATION', skills: operatingSystems }
  ];

  const renderCategory = (category, index) => (
    <div key={index} className="category-column">
      <div className="category-header">{category.title}</div>
      <ListGroup variant="flush">
        {category.skills.map((skill, idx) => (
          <ListGroup.Item key={idx}>
            <span className="skill-name">{skill.name}</span>
            <ProgressBar
              animated={showProgress}
              now={showProgress ? skill.percentage : 0}
              className="my-2 progress-bar-label"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );

  return (
    <div className="container my-5 text-center">
      <GlitchText text="COMPETENCE" />
      {showSkills && (
        <animated.div style={skillsAnimation}>
          <Container>
            {isMobile ? (
              <Carousel indicators={false} controls={false}>
                {categories.map((category, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-item-content">
                      {renderCategory(category, index)}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : isTablet ? (
              <div className="skills-grid">
                {categories.map((category, index) => renderCategory(category, index))}
              </div>
            ) : (
              <Row className="justify-content-center">
                {categories.map((category, index) => renderCategory(category, index))}
              </Row>
            )}
          </Container>
        </animated.div>
      )}
    </div>
  );
};

export default SkillsPage;
