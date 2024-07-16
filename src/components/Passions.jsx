import "../scss/components/Passions.scss";
import animals from "../images/animals2.jpg";
import music from "../images/music.png";
import yoga from "../images/yoga5.png";
import podcast from "../images/podcast.jpeg";
import skincare from "../images/skincare2.jpeg";

function Passions() {
  return (
    <section className="passionsSection" id="passions">
        <h1 className="passionsSection__title">Passions</h1>

        <div className="passionsSection__wrapper">
            <div className="passionOne">
                <img className="passionOne__image" src={music} alt="music" />
                <h3 className="passionOne__title">Music & Songwriting</h3>
            </div>

            <div className="passionTwo">
                <img className="passionTwo__image" src={animals} alt="animals" />
                <h3 className="passionTwo__title">Animals</h3>
            </div>

            <div className="passionThree">
                <img className="passionThree__image" src={yoga} alt="yoga" />
                <h3 className="passionThree__title">Yoga</h3>
            </div>

            <div className="passionFour">
                <img className="passionFour__image" src={podcast} alt="personal_growth" />
                <h3 className="passionFour__title">Personal Growth</h3>
            </div>


            <div className="passionFive">
                <img className="passionFive__image" src={skincare} alt="skincare" />
                <h3 className="passionFive__title">Skincare</h3>
            </div>

        </div>
    </section>
  )
}

export default Passions;