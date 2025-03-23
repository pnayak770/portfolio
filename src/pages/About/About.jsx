import React from "react";
import { motion } from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import { data } from "../../assets/data.js";
import { useTheme } from "../../components/ThemeContext.jsx";
import "./About.css";
import { useState } from "react";

const colors = ["#008080", "#4169E1", "#DC143C"]; 

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? data.sun : data.moon;
  const twitterIcon = theme === "light" ? data.twitterLight : data.twitterDark;
  const githubIcon = theme === "light" ? data.githubLight : data.githubDark;
  const linkedinIcon = theme === "light" ? data.linkedinLight : data.linkedinDark;

  const [colorIndex, setColorIndex] = useState(0);

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <motion.img
          src={data.heroImg}
          className="hero"
          alt="Profile picture of Harris Johnsen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
      <div className="info">
      <h2 style={{ color: colors[colorIndex] }}>
      <Typewriter
        words={[
          "Hi, I'm Parmeshwar Nayak",
          "I'm a Frontend Developer",
          "I'm a MERN Developer",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
        onType={(count) => setColorIndex(count % colors.length)} // Change color
      /></h2>
        {/* <h2>Frontend Developer</h2> */}
        <span>
          <a href="https://x.com/Mr_NAaYaK" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/pnayak770" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/parmeshwar-nayak/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
        "Enthusiastic fresher eager to build dynamic and user-friendly React web " 🚀
        </p>
        <a href={data.cv} download>
          <motion.button
            className="hover"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.button>
        </a>
      </div>
      {/* <div className="background-animation"></div> */}
    </section>
  );
};

export default Hero;
