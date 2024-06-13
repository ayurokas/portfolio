import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ProgressBar } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import GlitchText from '../components/glicht/glicht';
import '../css/skill.css';

const SkillsPage = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
      setTimeout(() => {
        setShowProgress(true);
      }, 400); 
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  const skillsAnimation = useSpring({
    opacity: showSkills ? 1 : 0,
    transform: showSkills ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
  });

  const skills = [
    { name: 'HTML / CSS / SASS / Bootstrap ', percentage: 80 },
    { name: '.NET / C# / XAML', percentage: 75 },
    { name: 'JavaScript / React', percentage: 60 },
    { name: 'PHP', percentage: 55 },
    { name: 'Powershell', percentage: 25 },
    { name: 'Angular / Java / Spring Boot', percentage: 5 },

  ];

  return (
    <div className="container my-5 text-center">
      <GlitchText text="SKILLS" />
      {showSkills && (
        <animated.div style={skillsAnimation}>
          <Container>
            <Row>
              <Col md={3}>
                <div className="language-header">LANGUAGE</div>
                <ListGroup variant="flush">
                  {skills.map((skill, index) => (
                    <ListGroup.Item key={index}>
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
            </Row>
          </Container>
        </animated.div>
      )}
    </div>
  );
};

export default SkillsPage;