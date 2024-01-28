
import logo from "../../img/logo.png";
import savat from "../../img/Savat.png"
import "./main.css"


export const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header-innner">
                <nav className="header-nav">
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Furniture</a>
                        </li>
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Why Feather</a>
                        </li>
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Feather for Business</a>
                        </li>
                </nav>
                    <a href="#" className="logo-link">
                        <img src={logo} alt="" width={115} height={26} />
                    </a>
                    <nav className="header-nav">
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Check if We Deliver</a>
                        </li>
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item-link">
                            <a className="nav-link" href="#">Account</a>
                        </li>
                        <a className="header-nav-savat" href="#">
                           <img src={savat} alt="" width={26} height={25} />
                        </a> 
                </nav>
            </div>
        </div>
    </header>
    </>
  );
};
