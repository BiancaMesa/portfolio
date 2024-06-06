import "../scss/components/Values.scss";
import underwater from "../images/underwater.jpg";
import sparkle from "../images/sparkle.png";

function Values() {
  return (
    <section className="valuesSection">
        {/* <h1 className="valuesSection__title">Values</h1> */}

            <img className="valuesSection__image" src={underwater} alt="underwater_img" />

            <div className="valuesSection__wrapper">
                <h1 className="valuesSection__wrapper--title">VALUES</h1>

                <div className="valueOne">
                    <h3 className="valueOne__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> KINDNESS, EMPATHY & RESPECT <img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueOne__text">Treating others in a way that proves there's goodness & beauty in the world</p>
                </div>

                <div className="valueTwo">
                    <h3 className="valueTwo__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> DEDICATION <img className="valueSparkle" src={sparkle} alt="sparkle" /> 
                    </h3>
                    <p className="valueTwo__text">Treating others in a way that honors their dignigty & individuality even if we see the world differently/ Whatever the endeavor I embark on I am passionate about it and I commit to it</p>
                </div>

                <div className="valueThree">
                    <h3 className="valueThree__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> BEAUTY/ COLLABORATION <img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueThree__text">Bringing beauty to ..</p>
                </div>

                <div className="valueFour">
                    <h3 className="valueFour__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> GROWTH / QUALITY / SELF-AWARENESS<img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueFour__text">Towards self & others</p>
                </div>

                {/* <div className="valueFive">
                    <h3 className="valueFive__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> GROWTH <img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueFive__text">Towards self & others</p>
                </div> */}

                {/* <p className="valuesContainer__written--text"></p> */}

            </div>
    </section>
  )
}

export default Values;