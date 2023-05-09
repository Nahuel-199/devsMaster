import './App.css'
import { ThemeContext } from "./context";
import Header from './components/header/Header'
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Parallax from './components/parallax/Parallax';
import Wsp from './components/wsp/Wsp';
import Testimonials from './components/testimonials/Testimonials';
import Planes from './components/planes/Planes';
import Parallax2 from './components/parallax2/Parallax2';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Works from './components/works/Works';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
    >
      <Toggle />
      <Header />
      <main className='main'>
        <Wsp />
        <Home />
        <About />
        <Parallax />
        <Testimonials />
        <Planes />
        <Parallax2 />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
