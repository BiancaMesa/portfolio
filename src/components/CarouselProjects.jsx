import Carousel from 'react-bootstrap/Carousel';
import rickAndMorty from "../images/rick2.png";
import catCharity from "../images/cat_charity.png";
//import "../scss/components/Projects.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselProjects () {

  const projectSlides = [
    {
      "image": rickAndMorty,
      "title": "Rick and Morty Character Finder",
      "description": "Project Description",
      "technologies": "tech used icons"
    },
    {
      "image": catCharity,
      "title": "Gatos de Ogíjares",
      "description": "Project Description",
      "technologies": "tech used icons"
    }
  ]

  return (
    <Carousel fade>

      {projectSlides.map((projectSlide, index) => (
        <Carousel.Item className="projects__project" key={index}>
        <Carousel.Caption>
          <h3 className="projectTitle">{projectSlide.title}</h3>
          <p className="projectDescription">{projectSlide.description}</p>
          <span>{projectSlide.technologies}</span>
          </Carousel.Caption>
        <img src={projectSlide.image} className="projects__project--image" alt={projectSlide.title}  />
        </Carousel.Item>
      ))}
  </Carousel>



    // <Carousel fade>

    //   <Carousel.Item className="projects__project">
    //     <Carousel.Caption>
    //       <h3 className="projectTitle">Rick and Morty Character Finder</h3>
    //       <p className="projectDescription">Project description ..kj ajskkdajbs </p>
    //       <span>TECH used icons</span>
    //       </Carousel.Caption>
    //     <img src={rickAndMorty} className="projects__project--image" alt="Rick and Morty"  />
    //   </Carousel.Item>

    //   <Carousel.Item className="projects__project">
    //     <Carousel.Caption>
    //       <h3 className="projectTitle">Gatos de Ogíjares</h3>
    //               <p className="projectDescription">Project description ..kj ajskkdajbs </p>
    //               <span>TECH used icons</span>
    //       </Carousel.Caption>
    //     <img src={catCharity} className="projects__project--image" alt="Cat Charity" />
    //   </Carousel.Item>

    //   <Carousel.Item className="projects__project">
    //     <Carousel.Caption>
    //       <h3 className="projectTitle">Gatos de Ogíjares</h3>
    //               <p className="projectDescription">Project description ..kj ajskkdajbs </p>
    //               <span>TECH used icons</span>
    //       </Carousel.Caption>
    //     <img src={catCharity} className="projects__project--image" alt="Cat Charity" />
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default CarouselProjects;