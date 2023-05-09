import { useContext } from "react";
import { ThemeContext } from "../../context";
import mq from "../../assets/hacker.png";
import "./about.css";
import Info from "./Info";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="about section" id="about">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        Creamos sitios web profesionales y atractivos para tu negocio
      </h2>
      <span className="section__subtitle">
        Transforma tu idea en un sitio web funcional y moderno con nosotros
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Enfocamos nuestros esfuerzos en la creación de páginas web, landing
            pages y eccomerce para que tu negocio tenga presencia en línea y
            puedas llegar a más clientes.
            Ofrecemos soluciones en línea personalizadas, incluyendo el diseño
            100% personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
