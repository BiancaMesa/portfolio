import "../scss/components/Values.scss";

function Values() {
  return (
    <section className="valuesSection">
        {/* <h1 className="valuesSection__title">Values</h1> */}

            <img className="valuesSection__image" src="/public/underwater.jpg" alt="underwater_img" />

            <div className="valuesSection__wrapper">
                <h1 className="valuesSection__wrapper--title">Values</h1>

                <div className="valueOne">
                    <h3 className="valueOne__title">Value 1</h3>
                    <p className="valueOne__text">Explain</p>
                </div>

                <div className="valueTwo">
                    <h3 className="valueTwo__title">Value 2</h3>
                    <p className="valueTwo__text">Explain</p>
                </div>

                <div className="valueThree">
                    <h3 className="valueThree__title">Value 3</h3>
                    <p className="valueThree__text">Explain</p>
                </div>

                <div className="valueFour">
                    <h3 className="valueFour__title">Value 4</h3>
                    <p className="valueFour__text">Explain</p>
                </div>

                {/* <p className="valuesContainer__written--text"></p> */}

            </div>
    </section>
  )
}

export default Values;