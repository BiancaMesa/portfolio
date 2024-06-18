// import {NavLink} from "react-router-dom";
import "../scss/components/About.scss";
import bianca from "../images/bianca3.jpeg";
import aboutMe from "../images/about_me.png";

function About() {
  return (
    <section className="aboutSection" id="about">
        {/* <section className="aboutSection__section1"> */}
          <div className="aboutSection__wrapper">
            {/* <img className="aboutSection__wrapper--title" src={aboutMe} alt="aboutMe" /> */}
            <h1 className="aboutSection__wrapper--title1">About Me</h1>
            <h2 className="aboutSection__wrapper--title2">A passionate junior front-end developer with a background in coaching and a big love for design</h2>
            <p className="aboutSection__wrapper--text">⚡️ A passionate junior front-end developer with back-end knowledge. I enjoy working in collaborative and innovative teams where I can continue learning and growing. I am creative and naturally curious. I love English and incorporate it into many aspects of my life. I am dedicated and bring quality to my work. Additionally, I have cultivated serenity and patience because experience has taught me that progress is achieved step by step. I am constantly seeking to improve myself and contribute to every project I undertake in a meaningful way.</p>

            <p className="aboutSection__wrapper--text">
              🤓🫶🏽🌷I have a big passion for design and I find programming a great way to combine both the logical, problem-solving part of the brain with the left hemisphere which is more about creativity, imagination and innovation.
            </p>
            {/* <a href="https://drive.google.com/file/d/1R6Fwre1Xz3tkCvGrGNSUFLPX5cYWXlie/view" download="CV Bianca Mesa - Front-End Developer.pdf" target="_blank" className="aboutSection__wrapper--resumeButton">Download Résumé</a> */}
             <a href="./src/resume/CV Bianca Mesa - Front-End Developer.pdf" target="_blank" className="aboutSection__wrapper--resumeButton">Download Résumé</a>
            {/* <a href="./src/resume/CV Bianca Mesa - Front-End Developer.pdf" download="CV Bianca Mesa - Front-End Developer.pdf" target="_blank" className="aboutSection__wrapper--resumeButton">Download Résumé</a> */}
          </div>
            <img className="aboutSection__image" src={bianca} alt="bianca" />
        {/* </section> */}
    </section>
  )
}

export default About;