import { useContext, useState } from "react";
import logo from "../../assets/logo_header.png"
import "./header.css";
import { ThemeContext } from "../../context";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header" style={{ backgroundColor: darkMode && "black" }}>
      <nav className="nav container">
        <a href="#home" className="nav__logo" style={{ color: darkMode && "#fff" }}>
          <span>

          Devs Master
          </span>
        </a>
         <img className="img_header" src={logo} alt="logo" />
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} style={{ backgroundColor: darkMode && "black" }}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"
              onClick={() => setActiveNav("#home")} 
              className={
                activeNav === "#home" ? "nav__link active-link"
                : "nav__link"
              }  style={{ color: darkMode && "#fff" }}>
              <i style={{ color: darkMode && "#fff" }} className="uil uil-estate nav__icon"></i>
               Inicio
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#about"
              onClick={() => setActiveNav("#about")} 
              className={
                activeNav === "#about" ? "nav__link active-link"
                : "nav__link"
              }
              style={{ color: darkMode && "#fff" }}>
                <i style={{ color: darkMode && "#fff" }} className="uil uil-user nav__icon"></i>
                Que hacemos
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#clientes" 
              onClick={() => setActiveNav("#skills")} 
              className={
                activeNav === "#clientes" ? "nav__link active-link"
                : "nav__link"
              } style={{ color: darkMode && "#fff" }}>
                <i style={{ color: darkMode && "#fff" }} className="uil uil-file-alt nav__icon"></i>
                Clientes
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#planes" 
              onClick={() => setActiveNav("#contact")} 
              className={
                activeNav === "#planes" ? "nav__link active-link"
                : "nav__link"
              } style={{ color: darkMode && "#fff" }}>
                <i style={{ color: darkMode && "#fff" }} className="uil uil-message nav__icon"></i>
                Planes
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#trabajos" 
              onClick={() => setActiveNav("#trabajos")} 
              className={
                activeNav === "#trabajos" ? "nav__link active-link"
                : "nav__link"
              } style={{ color: darkMode && "#fff" }}>
                <i style={{ color: darkMode && "#fff" }} className="uil uil-scenery nav__icon"></i>
                Trabajos
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#contact" 
              onClick={() => setActiveNav("#contact")} 
              className={
                activeNav === "#contact" ? "nav__link active-link"
                : "nav__link"
              } style={{ color: darkMode && "#fff" }}>
                <i style={{ color: darkMode && "#fff" }} className="uil uil-message nav__icon"></i>
                Contancto
              </a>
            </li>
          </ul>

          <i style={{ color: darkMode && "#fff" }} className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i  style={{ color: darkMode && "#fff" }} className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;