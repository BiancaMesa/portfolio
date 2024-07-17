import "../scss/components/Unique.scss";
import quoteVideo from "../video/video1.mp4";
import tech from "../images/tech1.jpg";
import english from "../images/english14.jpg";
import coaching from "../images/coaching7.png";
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
                <h2 className="uniqueness__title">Tech</h2>
                <p className="uniqueness__description">I am in love with technology, coding and design and that makes me pour my heart and love into the projects I undertake.</p>
            </div>

            <div className="uniqueness uniquenessTwo">
              <img className="uniqueness__image imageTwo" src={english} alt="english" />
                <h2 className="uniqueness__title englishTitle">English</h2>
                <p className="uniqueness__description englishDescription">I have cultivated a fluent level thanks to my big passion for the language. Plus, I thrive off of being in international environments.</p>
            </div>

            <div className="uniqueness uniquenessThree">
              <img className="uniqueness__image" src={coaching} alt="coaching" />
                <h2 className="uniqueness__title">Coaching</h2>
                <p className="uniqueness__description"> The more you understand yourself, the more you will be able to reach your potential. My training as a life coach has deepen my understanding of our mental health and how it is key for us to flourish both personal and professionally.</p>
            </div>

            <div  className="uniqueness uniquenessFour">
              <img className="uniqueness__image imageFour" src={yoga} alt="yoga" />
                <h2 className="uniqueness__title">Yoga</h2>
                <p className="uniqueness__description yogaDescription"> Progress and excellence is an accumulation of small steps in the right direction. This practice has made me reached new levels of consistency, work ethic, and commitment.</p>
            </div>
         </div>
    </section>
  )
}

export default Unique;