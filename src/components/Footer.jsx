import "../scss/components/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__author">&copy; 2024 created by Bianca Mesa</p>

        <section className="footer__socials"> 
          <i className="fa-solid fa-envelope footer__socials--email"></i>
          <i className="fa-brands fa-linkedin-in footer__socials--linkedin"></i>
          <i className="fa-brands fa-github footer__socials--github"></i>

         
        </section>
        
    </footer>
  )
}

export default Footer;