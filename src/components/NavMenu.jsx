//import "../scss/components/NavMenu.scss";
import {Link} from "react-scroll";

function NavMenu() {
  return (
    <ul className="header__menu">
      <li className="header__menu--item">
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
      <li className="header__menu--item">
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
      <li className="header__menu--item">
        <Link
          // className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          // onClick={toggleMenu}
          >
          ABOUT ME
        </Link>
      </li>
      <li className="header__menu--item">
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
      <li className="header__menu--item">
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
      <li className="header__menu--item">
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
  )
}

export default NavMenu;