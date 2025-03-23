import React from "react";
import { motion ,AnimatePresence} from "framer-motion";
import skills from '../../assets/skill'
import "./Skill.css"; // Import external CSS

// const skills = [
//   { name: "HTML", icon: "/icons/html.png" },
//   { name: "CSS", icon: "/icons/css.png" },
//   { name: "JavaScript", icon: "/icons/javascript.png" },
//   { name: "React", icon: "/icons/react.png" },
//   { name: "Node.js", icon: "/icons/node.png" },
//   { name: "MongoDB", icon: "/icons/mongo.png" },
//   { name: "Express.js", icon: "/icons/express.png" },
//   { name: "Firebase", icon: "/icons/firebase.png" },
//   { name: "Git", icon: "/icons/git.png" },
//   { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
//   { name: "TypeScript", icon: "/icons/typescript.png" },
//   { name: "Figma", icon: "/icons/figma.png" },   // ✅ Added Figma
//   { name: "Java", icon: "/icons/java.png" },     // ✅ Added Java
//   { name: "Vercel", icon: "/icons/vercel.png" }  // ✅ Added Vercel
// ];

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeInOut" } },
};
const Skill = () => {
  return (
    <AnimatePresence mode="wait">

    <motion.div 
    initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >

    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
    </motion.div>
    </AnimatePresence>
  );
};

export default Skill;
