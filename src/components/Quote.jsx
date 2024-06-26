import "../scss/components/Quote.scss";
import quoteVideo from "../video/video1.mp4";
import tech from "../images/tech1.jpg";
import english from "../images/english1.jpg";
import coaching from "../images/coaching1.jpg";
import yoga from "../images/yoga6.jpg";

function Quote() {
  return (
    <section className="quoteSection" id="unique">

        <video className="quoteSection__video" autoPlay loop muted>
            <source src={quoteVideo} type="video/mp4"/>
        </video>

        <h1 className="quoteSection__title">We are all unique</h1>
        <h1 className="quoteSection__title2">and special</h1>

         <h2 className="quoteSection__subtitle">This is what differentiates me</h2>

         <div className="quoteSection__uniquenesses">
            <div className="uniqueness">
              <img className="uniqueness__image" src={tech} alt="tech" />
              <h2 className="uniqueness__title">Tech</h2>
              <p className="uniqueness__description">I am in love with technology, coding and design and that makes me pour my heart ... gives me drive to pour my heart into the projects I undertake./ that fuels me and makes me so committed.</p>
            </div>

            <div className="uniqueness">
              <img className="uniqueness__image" src={english} alt="english" />
              <h2 className="uniqueness__title">English</h2>
              <p className="uniqueness__description">I speak English so fluently </p>
            </div>

            <div className="uniqueness">
              <img className="uniqueness__image" src={coaching} alt="coaching" />
              <h2 className="uniqueness__title">Coaching</h2>
              <p className="uniqueness__description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches cute</p>
            </div>

            <div  className="uniqueness">
              <img className="uniqueness__image" src={yoga} alt="yoga" />
              <h2 className="uniqueness__title">Yoga</h2>
              <p className="uniqueness__description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches cute</p>
            </div>
         </div>

         {/* <div className="quoteSection__uniquenesses">
            <div className="quoteSection__tech">
              <img className="quoteSection__tech--image" src={tech} alt="tech" />
              <h2 className="quoteSection__tech--title">Tech</h2>
              <p className="quoteSection__tech--description">I am in love with technology and ....</p>
            </div>

            <div className="quoteSection__english">
            <img className="quoteSection__english--image" src={english} alt="english" />
              <h2 className="quoteSection__english--title">English</h2>
              <p className="quoteSection__english--description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches cute</p>
            </div>

            <div className="quoteSection__coaching">
            <img className="quoteSection__coaching--image" src={coaching} alt="coaching" />
              <h2 className="quoteSection__coaching--title">Coaching</h2>
              <p className="quoteSection__coaching--description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches cute</p>
            </div>

            <div className="quoteSection__yoga">
            <img className="quoteSection__yoga--image" src={yoga} alt="yoga" />
              <h2 className="quoteSection__yoga--title">Yoga</h2>
              <p className="quoteSection__yoga--description">Cat purring lap thread dangling curl play hide and seek magic protection good energy kitten crystals sleep angels good heart furry babies witches cute</p>
            </div>
         </div> */}

        
    </section>
  )
}

export default Quote;