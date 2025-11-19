import "../assets/css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          <Link to={"/"}>Talha Collections</Link>
        </h2>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/collection"}>Collection</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </Link>
        <Link to={"login"}>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </div>
    </header>
  );
}
export default Header;
