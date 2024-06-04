import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/components/CarouselProjects.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import rickAndMorty from "../images/rick5.png";
import catCharity from "../images/cat_charity2.png";
import grogu from "../images/grogu9.png";
import animeFinder from "../images/anime_finder8.png";
import guessTheNumber from "../images/guess_the_number5.png";
import pawsomeProfileCards from "../images/pawsome_profile_cards6.png";
import findACountry from "../images/find_a_country9.png";
import proyectosPaintones from "../images/proyectos_paintones4.png";




function CarouselProjects () {

  const projectSlides = [
    {
      "image": rickAndMorty,
      "title": "Rick and Morty Character Finder",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/rick-and-morty-character-finder",
      "website": "https://biancamesa.github.io/rick-and-morty-character-finder/",
      "alt": "First slide"
    },
    {
      "image": catCharity,
      "title": "Gatos de Ogíjares",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/cat-charity",
      "website": "https://biancamesa.github.io/cat-charity/",
      "alt": "Second slide"
    },
    {
      "image": guessTheNumber,
      "title": "Guess The Number",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/guess-the-number",
      "website": "https://biancamesa.github.io/guess-the-number/",
      "alt": "Third slide"
    },
    {
      "image": animeFinder,
      "title": "Anime Finder",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/anime-finder",
      "website": "https://biancamesa.github.io/anime-finder/",
      "alt": "Fourth slide"
    },
    {
      "image": pawsomeProfileCards,
      "title": "Pawsome Profile Cards",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/project-promo-w-module-2-team-3",
      "website": "https://victoriagz.github.io/project-promo-w-module-2-team-3/",
      "alt": "Sixth slide"
    },
    {
      "image": findACountry,
      "title": "Find a Country",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/find-a-country",
      "website": "https://biancamesa.github.io/find-a-country/",
      "alt": "Seventh slide"
    },
    {
      "image": grogu,
      "title": "Grogu Game",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/grogu-game",
      "website": "https://biancamesa.github.io/grogu-game/",
      "alt": "Eigth slide"
    },
    {
      "image": proyectosPaintones,
      "title": "Proyectos Paintones",
      "description": "Project Description",
      "technologies": "tech used icons",
      "github": "https://github.com/BiancaMesa/promo-w-module-4-team-2",
      "website": "https://proyectos-paintones.onrender.com",
      "alt": "Eighth slide"
    }
  ];


  return (
    <Carousel
      prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="chevronIconLeft" />}
      nextIcon={<FontAwesomeIcon icon={faChevronRight} className="chevronIconRight"/>}
      // interval={null}
    >

      {projectSlides.map((projectSlide, index) => (
        <Carousel.Item className="project"  key={index}>
          <Carousel.Caption className="project__info">
            <h3 className="project__info--title">{projectSlide.title}</h3>
            <p className="project__info--description">{projectSlide.description}</p>
            <span className="project__info--technologies">{projectSlide.technologies}</span>
            <div className='projectLinks'>
              <a className="projectLinks__github"  href={projectSlide.github} target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>

              <a className="projectLinks__website"  href={projectSlide.website} target="_blank">
              <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </Carousel.Caption>
          
         <img src={projectSlide.image} className="project__image" alt={projectSlide.alt}  />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProjects;