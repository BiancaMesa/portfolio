import "../scss/components/Quote.scss";

function Quote() {
  return (
    <section className="quoteSection">
        {/* <img className="quoteSection__image" src="/public/yoga_sunset.jpg" alt="yoga_sunset" /> */}

        <video className="quoteSection__video" autoplay loop >
            <source src="/public/video1.mp4" type="video/mp4"/>
        </video>

        <h2 className="quoteSection__quote">Take care of your purpose and your purpose will take care of you</h2>
    </section>
  )
}

export default Quote;