import "../scss/components/About.scss";
import bianca from "../images/bianca3.jpeg";

function About() {
  return (
    <section className="aboutSection">
        <section className="aboutSection__section1">
          <div className="aboutSection__section1--titleAndText">
            <h1 className="titleSection1">About Me</h1>
            <p className="textSection1">akjndkanj</p>
          </div>
            <img className="aboutSection__section1--image" src={bianca} alt="bianca" />
        </section>
        {/* <div className="aboutSection__section2">
            <img className="aboutSection__section2--image" src="/public/bianca3.jpeg" alt="bianca" />
        </div> */}

        

    </section>
  )
}

export default About;