import "../scss/components/NavMenu.scss";
import {Link} from "react-scroll";

function NavMenu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
      <li className="menu__list--item">
        <Link 
          // className="nav-link"
          to="projects"
          smooth={true}
          duration={500}
          // onClick={toggleMenu}
          >
          PROJECTS
        </Link>
      </li>

      <li className="menu__list--item dropdown">
        <Link
          // className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          // onClick={toggleMenu}
          >
          ABOUT ME

          <ul className="dropdown__content">
            <li className="dropdown__content--item">
              {/* <a href="skills">SKILLS</a> */}
              <Link
                // className="nav-link"
                to="skills"
                smooth={true}
                duration={500}
                // onClick={toggleMenu}
              >
              SKILLS
              </Link>
            </li>

            <li className="dropdown__content--item">
              <Link
                  // className="nav-link"
                  to="unique"
                  smooth={true}
                  duration={500}
                  // onClick={toggleMenu}
                >
                UNIQUE
                </Link>
            </li>

            <li className="dropdown__content--item">      
              <Link
                // className="nav-link"
                to="values"
                smooth={true}
                duration={500}
                // onClick={toggleMenu}
              >
              VALUES
              </Link>
            </li>
            
            <li className="dropdown__content--item">
            <Link
                // className="nav-link"
                to="passions"
                smooth={true}
                duration={500}
                // onClick={toggleMenu}
              >
              PASSIONS
              </Link>
            </li>
          </ul>
        </Link>
      </li>


      <li className="menu__list--item">
        <Link
          // className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          // onClick={toggleMenu}
          >
          CONTACT
        </Link>
      </li>
    </ul>
    </nav>
    
  )
}

export default NavMenu;