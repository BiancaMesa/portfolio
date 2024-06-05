import "../scss/components/Contact.scss";
//import { useForm, ValidationError } from '@formspree/react';

function Contact() {
 
  // const [state, submit, reset] = useForm('{"https://formspree.io/f/mvoejdwn"}');

//   if (state.succeeded) {
//     return (
//       <>
//         <p>Thanks for reaching out!</p>
//       </>
//     );
// }


  return (
    <section className="contactSection">
        <h1 className="contactSection__title">Let's get in touch!</h1>
        <p className="contactSection__subtitle">Feel free to reach out for collaborations, inquires, or just a friendly coding chat anytime!</p>
        
        
        <form 
          className="contactSection__form" 
          //onSubmit={submit}
          action="https://formspree.io/f/mvoejdwn"
          method="POST"
        >
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="name">Full Name</label>
            <input className="elementInput" type="text" placeholder="Carolina Hicks" name="name" id="name" required/>
            {/* <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            /> */}
          </div>
         
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="email">Email</label>
            <input className="elementInput" type="email" placeholder="carohicks@gmail.com" name="email" id="email" required/>
            {/* <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            /> */}
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle"   htmlFor="subject">Subject</label>
            <input className="elementInput" type="text" placeholder="Subject" name="subject" id="subject" required/>
            {/* <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
            /> */}
          </div>
          
          <div className="contactSection__form--element">
            <label className="elementTitle" htmlFor="message">Message</label>
            <textarea className="elementInput" rows="10" cols="33" placeholder="Your message" name="message" id="message" required></textarea>
            {/* <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            /> */}
          </div>
  
          <button className="contactSection__form--button"  type="submit">Submit</button>
          

          
        </form>
    </section>
  )
}

export default Contact;