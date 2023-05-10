import "./home.css";
import { Link } from "react-scroll";

const Home = () => {
  
  return (
    <div id="main">
      <div className="header-heading">
        <h1>Realizamos tu pagina web</h1>
        <p className="details">Diseños 100% personalizados</p>
        <p className="details">
          Aprovecha todo el potencial de tu negocio en línea con nuestro
          servicio especializado en desarrollo web
        </p>
        <div className="header-btns">
          <Link to="contact" smooth={true} duration={1000}>
            <button className="header-btn">HACENOS TU CONSULTA</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
