import "../scss/components/Values.scss";
import underwater from "../images/underwater.jpg";
import sparkle from "../images/sparkle.png";

function Values() {
  return (
    <section className="valuesSection" id="values">
        
        {/* <h1 className="valuesSection__title">Values</h1> */}
        {/* <h1 className="valuesSection__wrapper--title">VALUES</h1> */}

            <img className="valuesSection__image" src={underwater} alt="underwater_img" />
           

            <div className="valuesSection__wrapper">
                <h1 className="valuesSection__wrapper--title">VALUES</h1>

                <div className="valueTwo">
                    <h3 className="valueTwo__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" />DEDICATION & PURPOSE<img className="valueSparkle" src={sparkle} alt="sparkle" /> 
                    </h3>
                    <p className="valueTwo__text">I pour my heart into any endeavors I embark on showing up fully committed and dedicated.</p>
                </div>

                <div className="valueThree">
                    <h3 className="valueThree__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> HIGH QUALITY <img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueThree__text">Bringing high quality to any project and task I do. Striving for excellence.</p>
                </div>

                <div className="valueFour">
                    <h3 className="valueFour__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> ATTITUDE OF GROWTH & COLLABORATION<img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueFour__text">Having a mindset of growth, that is ever-learning and evolving.</p>
                </div>

                <div className="valueFive">
                    <h3 className="valueFour__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" />COLLABORATION<img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueFour__text">When we collaborate and when we support others, we enrich one another and we rise together.</p>
                </div>

                <div className="valueOne">
                    <h3 className="valueOne__title">
                        <img className="valueSparkle" src={sparkle} alt="sparkle" /> KINDNESS, EMPATHY & RESPECT <img className="valueSparkle" src={sparkle} alt="sparkle" />
                    </h3>
                    <p className="valueOne__text">Treating others in a way that proves there's goodness & beauty in the world.</p>
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