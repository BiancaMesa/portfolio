import "../scss/components/Values.scss";

function Values() {
  return (
    <section className="valuesSection">
        {/* <h1 className="valuesSection__title">Values</h1> */}

            <img className="valuesSection__image" src="/public/underwater.jpg" alt="underwater_img" />

            <div className="valuesSection__wrapper">
                <h1 className="valuesSection__wrapper--title">Values</h1>

                <div className="valueOne">
                    <h3 className="valueOne__title">
                        <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" /> KINDESS <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" />
                    </h3>
                    <p className="valueOne__text">Treating others in a way that proves there's goodness & beauty in the world</p>
                </div>

                <div className="valueTwo">
                    <h3 className="valueTwo__title">
                        <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" /> RESPECT <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" /> 
                    </h3>
                    <p className="valueTwo__text">Treating others in a way that honors their dignigty & individuality even if we see the world differently</p>
                </div>

                <div className="valueThree">
                    <h3 className="valueThree__title">
                        <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" /> EMPATHY <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" />
                    </h3>
                    <p className="valueThree__text">Towards self & others</p>
                </div>

                <div className="valueFour">
                    <h3 className="valueFour__title">
                        <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" /> VALUE 4 <img className="valueSparkle" src="/public/sparkle.png" alt="sparkle" />
                    </h3>
                    <p className="valueFour__text">Explain</p>
                </div>

                {/* <p className="valuesContainer__written--text"></p> */}

            </div>
    </section>
  )
}

export default Values;