import '../scss/App.scss'; 
import Header from './Header';
import Hero from './Hero';
import GalleryGrid from './GalleryGrid';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <GalleryGrid/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  )
}

export default App;
