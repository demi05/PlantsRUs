import cartIcon from "../assets/images/shopping-cart-03.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const animationVariants = {
    initial1: {
      x: 100,
    },
    animate1: {
      x: 0,
      transition: {
        delay: 0.35,
        duration: 1.5,
      },
    },
    initial2: {
      y: 50,
    },
    animate2: {
      y: 0,
      transition: {
        delay: 0.35,
        duration: 1.5,
      },
    },
  };

  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = (e) => {
    // e.preventDefault();
    setIsNavOpen((prevState) => !prevState);
    console.log(`Nav is now ${!isNavOpen}`);
    // navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <nav>
      <div className="nav">
        <motion.h2
          variants={animationVariants}
          initial="initial1"
          whileInView="animate1"
          viewport={{ once: true }}
        >
          Plants R Us
        </motion.h2>

        <motion.div
          variants={animationVariants}
          initial="initial2"
          whileInView="animate2"
          viewport={{ once: true }}
          className={`nav-elements ${isNavOpen ? "responsive-nav" : ""}`}
          ref={navRef}
        >
          <button onClick={toggleNavBar} className="nav-icon close-icon">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            <li onClick={toggleNavBar} className="active">
              Home
            </li>
            <li onClick={toggleNavBar}>About</li>
            <li onClick={toggleNavBar}>Products</li>
            <li onClick={toggleNavBar}>Catalogue</li>
          </ul>
          <div className="cart">
            <img src={cartIcon} alt="cart icon" />
            <p>2</p>
          </div>
        </motion.div>
        <button onClick={toggleNavBar} className="nav-icon open-icon">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
