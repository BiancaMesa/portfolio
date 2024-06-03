import "../scss/components/Projects.scss";
import CarouselProjects from './CarouselProjects';

function Projects() {
  return (
    <section className="projects">
        <h1 className="projects__title">Projects</h1>

        <CarouselProjects />

    </section>
  )
}

export default Projects;