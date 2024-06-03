import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/components/CarouselProjects.scss";
import rickAndMorty from "../images/rick2.png";
import catCharity from "../images/cat_charity2.png";
import grogu from "../images/grogu.png";
import animeFinder from "../images/anime_finder.png";
import guessTheNumber from "../images/guess_the_number.png";
import pawsomeProfileCards from "../images/pawsome_profile_cards.png";
import findACountry from "../images/find_a_country.png";



function CarouselProjects () {

  const projectSlides = [
    {
      "image": rickAndMorty,
      "title": "Rick and Morty Character Finder",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "First slide"
    },
    {
      "image": catCharity,
      "title": "Gatos de Ogíjares",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Second slide"
    },
    {
      "image": guessTheNumber,
      "title": "Guess The Number",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Third slide"
    },
    {
      "image": animeFinder,
      "title": "Anime Finder",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Fourth slide"
    },
    {
      "image": pawsomeProfileCards,
      "title": "Pawsome Profile Cards",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Sixth slide"
    },
    {
      "image": findACountry,
      "title": "Find a Country",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Seventh slide"
    },
    {
      "image": grogu,
      "title": "Grogu Game",
      "description": "Project Description",
      "technologies": "tech used icons",
      "alt": "Eigth slide"
    }
  ];

  // function ControlledCarousel() {
  //   const [index, setIndex] = useState(0);
  
  //   const handleSelect = (selectedIndex) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    <Carousel slide={false}>

      {projectSlides.map((projectSlide, index) => (
        <Carousel.Item className="project"  key={index}>
          <Carousel.Caption className="project__info">
            <h3 className="project__info--title">{projectSlide.title}</h3>
            <p className="project__info--description">{projectSlide.description}</p>
            <span className="project__info--technologies">{projectSlide.technologies}</span>
          </Carousel.Caption>
          
         <img src={projectSlide.image} className="project__image" alt={projectSlide.alt}  />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProjects;