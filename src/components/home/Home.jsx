import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import logo from "../../assets/fig.png"

const Home = () => {
    
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />
                <div className="home__img">
                  <img className="logo_figura" src={logo} alt="" />
                </div>
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home