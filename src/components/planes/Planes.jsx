import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Data } from "./Data";
import PlanesCard from "./PlanesCard";
import "./planes.css";

const Planes = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <section id="planes">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
       Nuestros servicios
      </h2>
      <div className="products">
        {Data &&
          Data.map((product, i) => <PlanesCard key={i} product={product} />)}
      </div>
    </section>
  );
};

export default Planes;