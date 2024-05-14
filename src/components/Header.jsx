import "../scss/components/Header.scss";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="header">
        <h1 className="header__mainName">Bianca Mesa</h1>
        <NavMenu/> 
    </header>
  )
}

export default Header;