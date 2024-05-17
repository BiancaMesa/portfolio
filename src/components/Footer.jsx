import "../scss/components/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__author">&copy; 2024 created by Bianca Mesa</p>

        <section className="footer__socials"> 

          <a className="footer__socials--anchor" href="mailto:bbiancamesa@gmail.com">
            <i className="fa-solid fa-envelope socialsIcon"></i>
          </a>
          
          <a className="footer__socials--anchor"  href="https://www.linkedin.com/in/bianca-mesa/" target="_blank">
            <i className="fa-brands fa-linkedin-in socialsIcon"></i>
          </a>

          <a className="footer__socials--anchor"  href="https://github.com/BiancaMesa" target="_blank">
            <i className="fa-brands fa-github socialsIcon"></i>
          </a>
        </section>
        
    </footer>
  )
}

export default Footer;