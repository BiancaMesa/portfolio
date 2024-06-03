import Carousel from 'react-bootstrap/Carousel';
import rickAndMorty from "../images/rick2.png";
import catCharity from "../images/cat_charity.png";
//import "../scss/components/Projects.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselProjects () {
  return (
    <Carousel fade>

      <Carousel.Item className="projects__project">
        <Carousel.Caption>
          <h3 className="projectTitle">Rick and Morty Character Finder</h3>
                  <p className="projectDescription">Project description ..kj ajskkdajbs </p>
                  <span>TECH used icons</span>
          </Carousel.Caption>
        <img src={rickAndMorty} className="projects__project--image" alt="Rick and Morty"  />
      </Carousel.Item>

      <Carousel.Item className="projects__project">
        <Carousel.Caption>
          <h3 className="projectTitle">Gatos de Ogíjares</h3>
                  <p className="projectDescription">Project description ..kj ajskkdajbs </p>
                  <span>TECH used icons</span>
          </Carousel.Caption>
        <img src={catCharity} className="projects__project--image" alt="Cat Charity" />
      </Carousel.Item>

      <Carousel.Item className="projects__project">
        <Carousel.Caption>
          <h3 className="projectTitle">Gatos de Ogíjares</h3>
                  <p className="projectDescription">Project description ..kj ajskkdajbs </p>
                  <span>TECH used icons</span>
          </Carousel.Caption>
        <img src={catCharity} className="projects__project--image" alt="Cat Charity" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProjects;