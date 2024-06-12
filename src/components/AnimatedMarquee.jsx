import "../scss/components/AnimatedMarquee.scss";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function AnimatedMarquee() {
  return (
    // <div className="marqueeContainer">
    <Marquee className="marquee"> 
      <span className="marquee__item">CREATIVE</span> 
      {/* <i className="fa-solid fa-moon marquee__item"></i> */}
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">ENTHUSIAST</span> 
      {/* <i className="fa-solid fa-moon marquee__item"></i> */}
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">SUPPORTIVE</span>
      {/* <i className="fa-solid fa-moon marquee__item"></i> */}
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">SOLUTION-ORIENTED</span>
      {/* <i className="fa-solid fa-moon marquee__item"></i> */}
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
    </Marquee>
    // {/* </div> */}
  )
}

export default AnimatedMarquee;