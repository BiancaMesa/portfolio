import "../scss/components/Hero.scss";

function Hero() {
  return (
   <section className="hero">
    <img className="hero__image" src="/public/ocean2.jpg" alt="ocean2_img" />
    <img className="hero__image" src="/public/ocean1.jpg" alt="ocean1_img" />

    <div className="hero__infoCard">
        <p className="hero__infoCard--intro">Hi, this is Bianca</p>
        <h1 className="hero__infoCard--statement">I'M A PASSIONATE FRONT-END DEVELOPER</h1>
        <p className="hero__infoCard--subtext">lorem ....</p>
        <button className="hero__infoCard--button">Know More</button>
    </div>
   </section>
  )
}

export default Hero;