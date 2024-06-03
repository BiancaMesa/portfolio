import "../scss/components/Quote.scss";
import quoteVideo from "../images/video1.mp4";

function Quote() {
  return (
    <section className="quoteSection">
        {/* <img className="quoteSection__image" src="/public/yoga_sunset.jpg" alt="yoga_sunset" /> */}

        <video className="quoteSection__video" autoPlay loop muted>
            <source src={quoteVideo} type="video/mp4"/>
        </video>

        {/* <h2 className="quoteSection__quote">Take care of your purpose and your purpose will take care of you</h2> */}
        <div className="quoteSection__coaching">
          <h2 className="quoteSection__coaching--title">Coaching</h2>
          <p className="quoteSection__coaching--description">Lorem...</p>
        </div>

        <div className="quoteSection__yoga">
          <h2 className="quoteSection__yoga--title">Yoga</h2>
          <p className="quoteSection__yoga--description">Lorem...</p>
        </div>
    </section>
  )
}

export default Quote;