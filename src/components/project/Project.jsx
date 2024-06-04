import React from 'react';
import './projectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    {project.features.length > 0 && (
      <>
        <h3>Fonctionnalités</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </>
    )}
    {project.technologies.length > 0 && (
      <>
        <h3>Technologies Utilisées</h3>
        <ul>
          {project.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default ProjectCard;
