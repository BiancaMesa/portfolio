import "../scss/components/AnimatedMarquee.scss";
import Marquee from "react-fast-marquee";

function AnimatedMarquee() {
  return (
    // <div className="marqueeContainer">
    <Marquee className="marquee"> 
      <span className="marquee__item">CREATIVE</span> 
      <i className="fa-solid fa-moon marquee__item"></i>
      <span className="marquee__item">ENTHUSIAST</span> 
      <i className="fa-solid fa-moon marquee__item"></i>
      <span className="marquee__item">SUPPORTIVE</span>
      <i className="fa-solid fa-moon marquee__item"></i>
      <span className="marquee__item">SOLUTION-ORIENTED</span>
      <i className="fa-solid fa-moon marquee__item"></i>
  </Marquee>
    // </div>
  )
}

export default AnimatedMarquee;