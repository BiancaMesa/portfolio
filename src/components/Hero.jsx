import "../scss/components/Hero.scss";

function Hero() {
  return (
   <section className="hero">
    <div className="hero_imageContainer">
        <img className="hero__imageContainer--image" src="/public/ocean2.jpg" alt="ocean2_img" />
        <img className="hero__imageContainer--image" src="/public/ocean1.jpg" alt="ocean1_img" />
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