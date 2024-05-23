import cartIcon from "../assets/images/shopping-cart-03.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { delay, motion } from "framer-motion";

const Nav = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <nav>
      <div className="nav">
        <motion.h2 animate={{ x: [100, 0] }} transition={{ duration: 1.5 }}>
          Plants R Us
        </motion.h2>
        <motion.div
          animate={{ y: [50, 0] }}
          transition={{ duration: 1.5 }}
          className="nav-elements"
          ref={navRef}
        >
          <button onClick={showNavBar} className="nav-icon close-icon">
            <FontAwesomeIcon icon={faTimes} />
          </button>
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
        </motion.div>
        <button onClick={showNavBar} className="nav-icon open-icon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
