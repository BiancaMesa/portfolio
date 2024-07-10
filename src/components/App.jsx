import { Route, Routes } from "react-router-dom";
import '../scss/App.scss'; 
import Header from './Header';
import Hero from './Hero';
import AnimatedMarquee from './AnimatedMarquee';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Techs from './Techs';
import Quote from './Quote';
import Values from './Values';
import Contact from './Contact';
import Passions from './Passions';



function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header/>
          <Hero/>
          <AnimatedMarquee/>
          <Projects/>
          <About/>
          <Techs/>
          <Quote/>
          <Values/>
          <Passions/>
          <Contact/>
          <Footer/>
        </>}
      />
    </Routes>
  );
}

export default App;
