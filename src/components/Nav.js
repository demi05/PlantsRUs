import cartIcon from "../assets/images/shopping-cart-03.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <nav>
      <div className="nav">
        <motion.h2 whileHover={{ x: 100 }} transition={{ delay: 0.1 }}>
          Plants R Us
        </motion.h2>
        <div className="nav-elements" ref={navRef}>
          <button onClick={showNavBar} className="nav-icon close-icon">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            <motion.li
              whileHover={{ y: 50 }}
              transition={{ delay: 0.1 }}
              onClick={showNavBar}
              className="active"
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ y: 50 }}
              transition={{ delay: 0.1 }}
              onClick={showNavBar}
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ y: 50 }}
              transition={{ delay: 0.1 }}
              onClick={showNavBar}
            >
              Products
            </motion.li>
            <motion.li
              whileHover={{ y: 50 }}
              transition={{ delay: 0.1 }}
              onClick={showNavBar}
            >
              Catalogue
            </motion.li>
          </ul>
          <div className="cart">
            <img src={cartIcon} alt="cart icon" />
            <p>2</p>
          </div>
        </div>
        <button onClick={showNavBar} className="nav-icon open-icon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
