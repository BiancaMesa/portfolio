import "../scss/components/Hero.scss";
import hero1 from "../images/ocean1.jpg";
import hero2 from "../images/ocean2.jpg";

function Hero() {
  return (
   <section className="hero">
    <div className="hero_imageContainer">
        <img className="hero__imageContainer--image" src={hero1} alt="hero1" />
        <img className="hero__imageContainer--image" src={hero2} alt="hero2" />
    </div>

    <div className="hero__infoCard">
        <p className="hero__infoCard--intro">HI, THIS IS BIANCA</p>
        <h1 className="hero__infoCard--statement">I'M A PASSIONATE FRONT-END DEVELOPER WITH A BIG THING FOR DESIGN</h1>
        <p className="hero__infoCard--subtext">lorem ....</p>
        <button className="hero__infoCard--button">Know More</button>
    </div>
   </section>
  )
}

export default Hero;