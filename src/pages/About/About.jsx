import './About.css'
import {data} from '../../assets/data.js'
import { useTheme } from '../../components/ThemeContext.jsx';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  console.log(useTheme());

  const themeIcon = theme === 'light' ? data.sun : data.moon;
  const twitterIcon = theme === 'light' ? data.twitterLight : data.twitterDark;
  const githubIcon = theme === 'light' ? data.githubLight : data.githubDark;
  const linkedinIcon = theme === 'light' ? data.linkedinLight : data.linkedinDark;

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img
          src={data.heroImg}
          className="hero"
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          Harris
          <br />
          Johnsen
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={data.cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;