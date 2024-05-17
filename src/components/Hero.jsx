import "../scss/components/Hero.scss";
import hero1 from "../images/ocean1.jpg";
import hero2 from "../images/ocean2.jpg";
import biancaHero from "../images/bianca6.jpeg";

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
        
       <div className="hero__infoCard--subContainer">
          <div className="heroInfo">
            <p className="heroInfo__subtext">lorem ....</p>
            <button className="heroInfo__button">Know More</button>
          </div>

          <img className="heroInfoCardImage" src={biancaHero} alt="biancaHero" />
       </div>
       
        
    </div>
   </section>
  )
}

export default Hero;