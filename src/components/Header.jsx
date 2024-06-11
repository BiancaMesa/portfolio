import "../scss/components/Header.scss";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="header" id="header">
      {/* <a href="#"> */}
        <h1 className="header__mainName">Bianca Mesa</h1>
      {/* </a> */}
        <NavMenu/> 
    </header>
  )
}

export default Header;