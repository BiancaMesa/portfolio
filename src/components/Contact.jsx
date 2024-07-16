import "../scss/components/Contact.scss";

function Contact() {
 

  return (
    <section className="contactSection" id="contact">
        <h1 className="contactSection__title">Let's get in touch!</h1>
        <p className="contactSection__subtitle">Feel free to reach out for collaborations, inquires, or just a friendly coding chat anytime!</p>
        
        
        <form 
          className="contactSection__form" 
          action="https://formspree.io/f/mvoejdwn"
          method="POST"
        >
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="name">Full Name</label>
            <input className="elementInput" type="text" placeholder="Carolina Hicks" name="name" id="name" required/>
          </div>
         
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="email">Email</label>
            <input className="elementInput" type="email" placeholder="carohicks@gmail.com" name="email" id="email" required/>
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle"   htmlFor="subject">Subject</label>
            <input className="elementInput" type="text" placeholder="Subject" name="subject" id="subject" required/>
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="message">Message</label>
            <textarea className="elementInput" rows="8" cols="33" placeholder="Your message" name="message" id="message" required></textarea>
          </div>
  
          <button className="contactSection__form--button"  type="submit">Submit</button>
          
        </form>
    </section>
  )
}

export default Contact;