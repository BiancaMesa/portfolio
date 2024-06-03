import "../scss/components/Projects.scss";
import rick from "../images/rick2.png";
//import catCharity from "../images/cat_charity.png";
//import { Carousel } from "react-bootstrap";
import CarouselProjects from './CarouselProjects';

function Projects() {
  return (
    <section className="projects">
        <h1 className="projects__title">Projects</h1>

        <CarouselProjects />




        {/* <div className="projects__project">
            {/* <i className="fa-solid fa-angle-left projects__project--angle"></i> */}
{/* 
            <div className="projects__project--info">
                <h3 className="projectTitle">Rick and Morty Character Finder</h3>
                <p className="projectDescription">Project description ..kj ajskkdajbs </p>
                <span>TECH used icons</span>
            </div>
            
            <img className="projects__project--image" src={rick} alt="rick" />

            {/* <i className="fa-solid fa-angle-right projects__project--angle"></i> */}
        {/* </div> */} 



        {/* <div className="projects__project">
            <i className="fa-solid fa-angle-left projects__project--angle"></i>
            
            <div className="projects__project--info">
                <h3 className="projectTitle">Gatos de Ogíjares</h3>
                <p className="projectDescription">Project description ..kj ajskkdajbs </p>
                <span>TECH used icons</span>
            </div>
            
            <img className="projects__project--image" src={catCharity} alt="rick" />

            <i className="fa-solid fa-angle-right projects__project--angle"></i>
        </div> */}
    </section>
  )
}

export default Projects;