import "../scss/components/AnimatedMarquee.scss";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function AnimatedMarquee() {
  return (
    <Marquee className="marquee"> 
      <span className="marquee__item">CREATIVE</span> 
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">ENTHUSIAST</span> 
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">SUPPORTIVE</span>
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
      <span className="marquee__item">SOLUTION-ORIENTED</span>
      <FontAwesomeIcon icon={faMoon} className="marquee__item" />
    </Marquee>
  )
}

export default AnimatedMarquee;