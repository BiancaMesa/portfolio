import "../scss/components/NavMenu.scss";
import {Link} from "react-scroll";

function NavMenu() {
  return (
    <nav className="menu">
      <ul className="menu__list">

      <li className="menu__list--item">
        <Link to="projects" smooth={true} duration={500} >
          PROJECTS
        </Link>
      </li>

      <li className="menu__list--item dropdown">
        <Link to="about" smooth={true} duration={500}>
          ABOUT ME

          <ul className="dropdown__content">
            <li className="dropdown__content--item">
              <Link to="skills" smooth={true} duration={500} >
                SKILLS
              </Link>
            </li>

            <li className="dropdown__content--item">
              <Link to="unique" smooth={true} duration={500} >
                UNIQUE
              </Link>
            </li>

            <li className="dropdown__content--item">      
              <Link to="values" smooth={true} duration={500} >
                VALUES
              </Link>
            </li>
            
            <li className="dropdown__content--item">
            <Link to="passions" smooth={true} duration={500} >
              PASSIONS
            </Link>
            </li>
          </ul>
        </Link>
      </li>


      <li className="menu__list--item">
        <Link to="contact" smooth={true} duration={500} >
          CONTACT
        </Link>
      </li>
    </ul>
    </nav>
    
  )
}

export default NavMenu;