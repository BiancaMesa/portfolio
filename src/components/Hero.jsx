import "../scss/components/Hero.scss";
import hero1 from "../images/ocean1.jpg";
import hero2 from "../images/ocean2.jpg";
import heart from "../images/favicon_heart3.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="hero">
      <div className="hero_imageContainer">
        <img className="hero__imageContainer--image" src={hero1} alt="hero1" />
        <img className="hero__imageContainer--image" src={hero2} alt="hero2" />
      </div>

      <div className="hero__infoCard">
        <p className="hero__infoCard--title">
          Hi, this is <span className="heroAuthorName">Bianca</span>{" "}
          <img className="heroHeart" src={heart} alt="heart"></img>
        </p>
        <h1 className="hero__infoCard--statement">
          A PASSIONATE FRONT-END DEVELOPER WITH A BIG THING FOR DESIGN{" "}
        </h1>

        <button className="hero__infoCard--button">
          <Link to="about" smooth={true} duration={500}>
            Know More
          </Link>
        </button>
      </div>

      <Link to="header" smooth={true} duration={500}>
        <FontAwesomeIcon icon={faChevronUp} className="scrollArrow" />
      </Link>
    </section>
  );
}

export default Hero;
