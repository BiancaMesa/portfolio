import Carousel from 'react-bootstrap/Carousel';
import rickAndMorty from "../images/rick2.png";
import catCharity from "../images/cat_charity2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss/components/CarouselProjects.scss";

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