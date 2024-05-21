import cartIcon from "../assets/images/shopping-cart-03.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <nav>
      <div className="nav">
        <h2>Plants R Us</h2>
        <div className="nav-elements" ref={navRef}>
          <ul>
            <li onClick={showNavBar} className="active">
              Home
            </li>
            <li onClick={showNavBar}>About</li>
            <li onClick={showNavBar}>Products</li>
            <li onClick={showNavBar}>Catalogue</li>
          </ul>
          <div className="cart">
            <img src={cartIcon} alt="cart icon" />
            <p>2</p>
          </div>
          <button onClick={showNavBar} className="nav-icon close-icon">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <button onClick={showNavBar} className="nav-icon open-icon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
