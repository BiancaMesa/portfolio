import "../scss/components/Header.scss";
import NavMenu from "./NavMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? "headerMenuOpen" : ""}`} id="header">
        <h1 className={`header__mainName ${isMobileMenuOpen ? "headerMenuOpen__mainName" : ""}`}>Bianca Mesa</h1>
        <div className="header__burgerMenu">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="header__burgerMenu--icon" onClick={toggleMobileMenu}/>
        </div>
        <NavMenu isMobileMenuOpen={isMobileMenuOpen}/> 
    </header>
  )
}

export default Header;