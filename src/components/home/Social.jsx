import { useContext } from 'react';
import { ThemeContext } from "../../context";

const Social = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/gabrielnahuel_/"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i style={{color: darkMode && "#fff"}} className="uil uil-instagram"></i>
      </a>
      
      <a
        href="https://github.com/Nahuel-199"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i style={{color: darkMode && "#fff"}} className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i style={{color: darkMode && "#fff"}} className="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
