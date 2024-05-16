import '../scss/App.scss'; 
import Header from './Header';
import Hero from './Hero';
import GalleryGrid from './GalleryGrid';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Resume from './Resume';
import Quote from './Quote';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <GalleryGrid/>
      <Projects/>
      <About/>
      <Resume/>
      <Quote/>
      <Footer/>
    </>
  )
}

export default App;
