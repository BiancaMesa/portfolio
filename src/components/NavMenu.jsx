import "../scss/components/NavMenu.scss";
import {Link} from "react-scroll";

function NavMenu({isMobileMenuOpen}) {
  return (
    <nav className={`menu ${isMobileMenuOpen ? "menuOpen" : ""}`}>
      <ul className={`menu__list ${isMobileMenuOpen ? "menuOpen__list" : ""}`}>

      <li className={`menu__list--item ${isMobileMenuOpen ? "menuOpen__list--item" : ""}`}>
        <Link to="projects" smooth={true} duration={500} >
          PROJECTS
        </Link>
      </li>

      <li className={`menu__list--item dropdown ${isMobileMenuOpen ? "menuOpen__list--item " : ""}`}>
        <Link to="about" smooth={true} duration={500}>
          ABOUT ME

          <ul className={`dropdown__content ${isMobileMenuOpen ? "menuOpen__dropdownContent " : ""}`}>
            <li className="menuOpen__dropdownContent--item ">
              <Link to="skills" smooth={true} duration={500} >
                SKILLS
              </Link>
            </li>

            <li className="menuOpen__dropdownContent--item ">
              <Link to="unique" smooth={true} duration={500} >
                UNIQUE
              </Link>
            </li>

            <li className="menuOpen__dropdownContent--item ">     
              <Link to="values" smooth={true} duration={500} >
                VALUES
              </Link>
            </li>
            
            <li className="menuOpen__dropdownContent--item ">
              <Link to="passions" smooth={true} duration={500} >
                PASSIONS
              </Link>
            </li>
          </ul>
        </Link>
      </li>

      <li className={` ${isMobileMenuOpen ? "menuOpen__list--item" : "hidden"}`}>
        <Link to="skills" smooth={true} duration={500} >
          SKILLS
        </Link>
      </li>

      <li className={`${isMobileMenuOpen ? "menuOpen__list--item" : "hidden"}`}>
        <Link to="unique" smooth={true} duration={500} >
          UNIQUE
        </Link>
      </li>

      <li className={`${isMobileMenuOpen ? "menuOpen__list--item" : "hidden"}`}>
        <Link to="values" smooth={true} duration={500} >
          VALUES
        </Link>
      </li>

      <li className={`${isMobileMenuOpen ? "menuOpen__list--item" : "hidden"}`}>
        <Link to="passions" smooth={true} duration={500} >
          PASSIONS
        </Link>
      </li>

      <li className={`menu__list--item ${isMobileMenuOpen ? "menuOpen__list--item" : ""}`}>
        <Link to="contact" smooth={true} duration={500} >
          CONTACT
        </Link>
      </li>
    </ul>
    </nav>
    
  )
}

export default NavMenu;