import "../scss/components/Resume.scss";
import javaScriptIcon from "../images/js1.png";
import reactIcon from "../images/react1.png";
import htmlIcon from "../images/html1.png";
import cssIcon from "../images/css.png";
import sassIcon from "../images/sass1.png";
import gitIcon from "../images/git1.png";
import nodejsIcon from "../images/nodejs1.png";
import mySQLIcon from "../images/mysql.png";
import bootstrap from "../images/bootstrap.png";

function Resume() {
  return (
    <section className="resumeContainer" id="skills">
        {/* <h1 className="resumeContainer__title">Résumé</h1> */}
        {/* <p>Lorem....</p> */}

        <div className="resume">
            <section className="resume__techs">
                <h2 className="resume__techs--title">Technologies and tools</h2>
                {/* <h3>Love them or hate them?</h3> */}
                <div className="resume__techs--techs">
                    {/* <div> */}
                        <img className="techIconImage" src={javaScriptIcon} alt="javascript_icon" />
                        <img className="techIconImage" src={reactIcon} alt="react_icon" />
                        <img className="techIconImage" src={htmlIcon} alt="html_icon" />
                        <img className="techIconImage" src={cssIcon} alt="css_icon" />
                        <img className="techIconImage" src={sassIcon} alt="sass_icon" />
                        <img className="techIconImage" src={bootstrap} alt="bootstrap_icon" />
                    {/* </div>
                    <div> */}
                    <img className="techIconImage" src={gitIcon} alt="git_icon" />
                    <img className="techIconImage" src={nodejsIcon} alt="nodejs_icon" />
                    <img className="techIconImage" src={mySQLIcon} alt="mySQL_icon" />
                    {/* </div> */}
                </div>
                {/* <p className="resume__techs--text">Icons of techs</p> */}
            </section>
            
            <section className="resume__skills">
                <h2 className="resume__skills--title">Soft skills</h2>
                {/* <p className="resume__skills--text">List of soft skills</p> */}
                <div className="skills">
                    <ul className="skills__listOne">
                        <li>Resourceful</li>
                        <li>Committed</li>
                        <li>Flexibility</li>
                        <li>Adaptability</li>
                        <li>Organization</li>
                        <li>Detail-oriented</li>
                    </ul>
                    <ul className="skills__listTwo">
                        <li>Creativity</li>
                        <li>Collaboration</li>
                        <li>Team spirit</li>
                        <li>Determination</li>
                        <li>Driven</li>
                    </ul>
                </div>
            </section>

            {/* <div className="resume__experience">
                <h2 className="resume__experience--title">Experience</h2>
                <p className="resume__experience--text">Tell experience</p>
            </div>
            
            <div className="resume__education">
                <h2 className="resume__education--title">Education</h2>
                <p className="resume__education--text">Tell education</p>
            </div>
             */}
        </div>
        
    </section>
  )
}

export default Resume