import "../scss/components/Projects.scss";
import CarouselProjects from './CarouselProjects';
// import {Link} from "react-scroll";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

function Projects() {
  return (
    <section className="projects" id="projects">
        <h1 className="projects__title">PROJECTS</h1>

        <CarouselProjects />

        {/* <Link to="header" smooth={true} duration={500}>
          <FontAwesomeIcon icon={faChevronUp} className="scrollArrow" />
        </Link> */}

    </section>
  )
}

export default Projects;