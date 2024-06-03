import "../scss/components/Passions.scss";
import newYork from "../images/newyork.jpg";
import animals from "../images/animals2.jpg";

function Passions() {
  return (
    <section className="passionsSection">
        <h1 className="passionsSection__title">Passions</h1>

        <div className="passionsSection__wrapper">
            <div className="passionsOne">
                <img className="passionOne__image" src={newYork} alt="newyork" />
                <h3 className="passionOne__title">In love with New York</h3>
            </div>

            <div className="passionTwo">
                <img className="passionTwo__image" src={animals} alt="animals" />
                <h3 className="passionTwo__title">Animals</h3>
            </div>

        </div>
    </section>
  )
}

export default Passions;