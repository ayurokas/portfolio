import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ProgressBar, Carousel } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import GlitchText from '../components/glicht/glicht';
import '../css/skill.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SkillsPage = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
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
    { name: 'Linux', percentage: 10 },
    { name: 'Window', percentage: 60 },
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
    <Col xs={12} md={6} lg={3} key={index} className="category-column">
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
    </Col>
  );

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow custom-prev">
      <FaArrowLeft />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow custom-next">
      <FaArrowRight />
    </div>
  );

  return (
    <div className="container my-5 text-center">
      <GlitchText text="COMPETENCE" />
      {showSkills && (
        <animated.div style={skillsAnimation}>
          <Container>
            {isMobile ? (
              <Carousel prevIcon={<CustomPrevArrow />} nextIcon={<CustomNextArrow />} indicators={false}>
                {categories.map((category, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-item-content">
                      {renderCategory(category, index)}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
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
