import "../scss/components/FunFacts.scss";
import newYork from "../images/newyork.jpg";
import animals from "../images/animals2.jpg";

function FunFacts() {
  return (
    <section className="funFactsSection">
        <h1 className="funFactsSection__title">Fun Facts</h1>

        <div className="funFactsSection__wrapper">
            <div className="funfactOne">
                <img className="funfactOne__image" src={newYork} alt="newyork" />
                <h3 className="funfactOne__title">In love with New York</h3>
            </div>

            <div className="funfactTwo">
                <img className="funfactTwo__image" src={animals} alt="animals" />
                <h3 className="funfactTwo__title">Animal lover</h3>
            </div>

        </div>
    </section>
  )
}

export default FunFacts;