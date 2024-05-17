import "../scss/components/Contact.scss";

function Contact() {
  return (
    <section className="contactSection">
        <h1 className="contactSection__title">Contact</h1>
        
        {/* <form className="contactSection__form" >
         
            <label className="contactSection__form--title" htmlFor="name">Name</label>
            <input className="contactSection__form--input" type="text" placeholder="Caro" name="name" id="name" required/>
          
            <label className="contactSection__form--title" htmlFor="lastName">Last Name</label>
            <input className="contactSection__form--input" type="text" placeholder="Hicks" name="lastName" id="lastName" required/>
         
        
            <label className="contactSection__form--title" htmlFor="email">Email</label>
            <input className="contactSection__form--input" type="email" placeholder="carohicks@gmail.com" name="email" id="email" required/>
        
        
            <label className="contactSection__form--title" htmlFor="number">Telephone Number</label>
            <input className="contactSection__form--input" type="number" placeholder="+44 789 09 74 55" name="number" id="number" />
         
            <label className="contactSection__form--title" htmlFor="subject">Subject</label>
            <input className="contactSection__form--input" type="text" placeholder="Subject" name="subject" id="subject" required/>
          
        
            <label className="contactSection__form--title" htmlFor="message">Message</label>
            <textarea className="contactSection__form--input" rows="10" cols="33" placeholder="Your message" name="message" id="message" required></textarea>
         
  
          <button className="contactSection__form--button"  type="submit">Submit</button>  
        </form> */}

        <form className="contactSection__form" >
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="name">Name</label>
            <input className="elementInput" type="text" placeholder="Caro" name="name" id="name" required/>
          </div>
         

          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="lastName">Last Name</label>
            <input className="elementInput" type="text" placeholder="Hicks" name="lastName" id="lastName" required/>
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="email">Email</label>
            <input className="elementInput" type="email" placeholder="carohicks@gmail.com" name="email" id="email" required/>
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="number">Telephone Number</label>
            <input className="elementInput" type="number" placeholder="+44 789 09 74 55" name="number" id="number" />
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle"   htmlFor="subject">Subject</label>
            <input className="elementInput" type="text" placeholder="Subject" name="subject" id="subject" required/>
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="message">Message</label>
            <textarea className="elementInput" rows="10" cols="33" placeholder="Your message" name="message" id="message" required></textarea>
          </div>
  
          <button className="contactSection__form--button"  type="submit">Submit</button>
          

          
        </form>
    </section>
  )
}

export default Contact;