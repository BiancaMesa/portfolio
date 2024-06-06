import "../scss/components/AnimatedMarquee.scss";
import Marquee from "react-fast-marquee";

function AnimatedMarquee() {
  return (
    // <div >
    <Marquee className="marquee"> 
      <span>CREATIVE</span> 
      <i className="fa-solid fa-moon"></i>
      <span>ENTHUSIAST</span> 
      <i className="fa-solid fa-moon"></i>
      <span>SUPPORTIVE</span>
      <i className="fa-solid fa-moon"></i>
      <span>SOLUTION-ORIENTED</span>
    </Marquee>
   // </div >
  )
}

export default AnimatedMarquee;