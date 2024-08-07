import "../scss/components/Techs.scss";
import javaScriptIcon from "../images/js1.png";
import reactIcon from "../images/react1.png";
import htmlIcon from "../images/html1.png";
import cssIcon from "../images/css.png";
import sassIcon from "../images/sass1.png";
import gitIcon from "../images/git1.png";
import nodejsIcon from "../images/nodejs1.png";
import mySQLIcon from "../images/mysql.png";
import bootstrap from "../images/bootstrap.png";

function Techs() {
  return (
    <section className="resumeContainer" id="skills">
      <h1 className="resumeContainer__title">Techs & Skills</h1>

      <div className="resume">
        <section className="resume__techs">
          <h2 className="resume__techs--title">Technologies and tools</h2>
          <div className="resume__techs--techs">
            <img
              className="techIconImage"
              src={javaScriptIcon}
              alt="javascript_icon"
            />
            <img className="techIconImage" src={reactIcon} alt="react_icon" />
            <img className="techIconImage" src={htmlIcon} alt="html_icon" />
            <img className="techIconImage" src={cssIcon} alt="css_icon" />
            <img className="techIconImage" src={sassIcon} alt="sass_icon" />
            <img
              className="techIconImage"
              src={bootstrap}
              alt="bootstrap_icon"
            />
            <img className="techIconImage" src={gitIcon} alt="git_icon" />
            <img className="techIconImage" src={nodejsIcon} alt="nodejs_icon" />
            <img className="techIconImage" src={mySQLIcon} alt="mySQL_icon" />
          </div>
        </section>

        <section className="resume__skills">
          <h2 className="resume__skills--title">Soft skills</h2>
          <div className="skills">
            <ul className="skills__listOne">
              <li>Resourceful</li>
              <li>Committed</li>
              <li>Flexible</li>
              <li>Adaptable</li>
              <li>Organized</li>
              <li>Detail-oriented</li>
            </ul>
            <ul className="skills__listTwo">
              <li>Collaborative</li>
              <li>Creative</li>
              <li>Problem-solving</li>
              <li>Determined</li>
              <li>Driven</li>
              <li>Proactive</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Techs;
