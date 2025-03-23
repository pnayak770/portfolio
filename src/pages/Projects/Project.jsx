import React from "react";
import ProjectCard from "../../components/Card/ProjectCard.jsx";
import { projectsData } from "../../assets/data.js";

import "./Project.css";

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          
            <ProjectCard key={index} {...project} index={index}/>
        
        ))}
      </div>
    </section>
  );
};

export default Project;
