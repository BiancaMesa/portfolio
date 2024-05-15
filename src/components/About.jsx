import "../scss/components/About.scss";

function About() {
  return (
    <section className="aboutSection">
        <div className="aboutSection__section1">
            <h1 className="aboutSection__section1--title">About Me</h1>
            <img className="aboutSection__section1--image" src="/public/bianca1.jpeg" alt="bianca" />
        </div>
        <div className="aboutSection__section2">
            <img className="aboutSection__section2--image" src="/public/bianca3.jpeg" alt="bianca" />
        </div>
        

    </section>
  )
}

export default About;