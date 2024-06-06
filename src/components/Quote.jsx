import "../scss/components/Quote.scss";
import quoteVideo from "../video/video1.mp4";

function Quote() {
  return (
    <section className="quoteSection">

        <video className="quoteSection__video" autoPlay loop muted>
            <source src={quoteVideo} type="video/mp4"/>
        </video>

        <h1 className="quoteSection__title">We are all unique</h1>
        <h1 className="quoteSection__title2">and special</h1>

         <h2 className="quoteSection__subtitle">This is what differentiates me</h2>

        <div className="quoteSection__english">
          <h2 className="quoteSection__english--title">English</h2>
          <p className="quoteSection__english--description">Lorem...</p>
        </div>

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