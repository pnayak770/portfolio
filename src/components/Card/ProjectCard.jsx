import "./ProjectCard.css"; // Import external CSS file
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, tech, github, live , index}) => {
  return (
    <motion.div
      key={index}
      // className="skill-card"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index*0.5 }}
    >
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-tech">Tech Used: {tech.join(", ")}</p>
          <div className="project-links">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
