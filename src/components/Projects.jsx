import "../scss/components/Projects.scss";
import CarouselProjects from './CarouselProjects';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">PROJECTS</h1>

      <CarouselProjects />

    </section>
  )
}

export default Projects;