import "../scss/components/Unique.scss";
import quoteVideo from "../video/video1.mp4";
import tech from "../images/tech1.jpg";
import english from "../images/english14.jpg";
//import coaching from "../images/coaching1.jpg";
import coaching from "../images/coaching7.png";
//import yoga from "../images/yoga6.jpg";
import yoga from "../images/yoga18.png";

function Unique() {
  return (
    <section className="uniqueSection" id="unique">

        <video className="uniqueSection__video" autoPlay loop muted>
            <source src={quoteVideo} type="video/mp4"/>
        </video>

        <h1 className="uniqueSection__title">We are all unique</h1>
        <h1 className="uniqueSection__title2">and special</h1>

         <h2 className="uniqueSection__subtitle">This is what differentiates me</h2>

         <div className="uniqueSection__uniquenesses">
            <div className="uniqueness uniquenessOne">
              <img className="uniqueness__image" src={tech} alt="tech" />
              {/* <div className="uniqueness__wrapper"> */}
                <h2 className="uniqueness__title">Tech</h2>
                <p className="uniqueness__description">I am in love with technology, coding and design and that makes me pour my heart and love into the projects I undertake.</p>
              {/* </div> */}
            </div>

            <div className="uniqueness uniquenessTwo">
              <img className="uniqueness__image imageTwo" src={english} alt="english" />
              {/* <div className="uniqueness__wrapper"> */}
                <h2 className="uniqueness__title englishTitle">English</h2>
                <p className="uniqueness__description englishDescription">I have cultivated a fluent level thanks to my big passion for the language. Plus, I thrive off of being in international environments.</p>
              {/* </div> */}
            </div>

            <div className="uniqueness uniquenessThree">
              <img className="uniqueness__image" src={coaching} alt="coaching" />
              {/* <div className="uniqueness__wrapper"> */}
                <h2 className="uniqueness__title">Coaching</h2>
                <p className="uniqueness__description"> The more you understand yourself, the more you will be able to reach your potential. My training as a life coach has revolutionized </p>
              {/* </div> */}
            </div>

            <div  className="uniqueness uniquenessFour">
              <img className="uniqueness__image imageFour" src={yoga} alt="yoga" />
              {/* <div className="uniqueness__wrapper"> */}
                <h2 className="uniqueness__title">Yoga</h2>
                <p className="uniqueness__description yogaDescription"> Progress and excellence is an accumulation of small steps in the right direction. This practice has made me reached new levels of patience, consistency, work ethic, and commitment.</p>
              {/* </div> */}
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

export default Unique;