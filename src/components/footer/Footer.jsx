import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./footer.css";

const Footer = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <footer style={{ backgroundColor: darkMode && "rgb(34 34 34)" }} className="footer">
      <div className="footer__container container">
        <h1 style={{ color: darkMode && "#fff" }} className="footer__title">Devs Master</h1>
        <ul className="footer__list">
          <li>
            <a style={{ color: darkMode && "#fff" }} href="#about" className="footer__link">
             Inicio
            </a>
          </li>

          <li>
            <a style={{ color: darkMode && "#fff" }} href="#Portfolio" className="footer__link">
            Que hacemos
            </a>
          </li>

          <li>
            <a style={{ color: darkMode && "#fff" }} href="#Skills" className="footer__link">
              Clientes
            </a>
          </li>

          <li>
            <a style={{ color: darkMode && "#fff" }} href="#Skills" className="footer__link">
              Blog
            </a>
          </li>

          <li>
            <a style={{ color: darkMode && "#fff" }} href="#Skills" className="footer__link">
              Planes
            </a>
          </li>

          <li>
            <a style={{ color: darkMode && "#fff" }} href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/gabrielnahuel_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Nahuel-199"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span style={{ color: darkMode && "#fff" }} className="footer__copy">
            &#169; Devs Master
        </span>
      </div>
    </footer>
  );
};

export default Footer;