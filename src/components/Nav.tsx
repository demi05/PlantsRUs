import cartIcon from "../assets/images/shopping-cart-03.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
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

  const toggleNavBar = () => {
    setIsNavOpen((prevState) => !prevState);
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
            <li onClick={toggleNavBar}><a href="#hero" className="active">
              Home</a>
            </li>
            <li onClick={toggleNavBar}><a href="#categories">Categories</a></li>
            <li onClick={toggleNavBar}><a href="#arrivals">Arrivals</a></li>
            <li onClick={toggleNavBar}><a href="#grow">Grow</a></li>
            <li onClick={toggleNavBar}>
              {" "}
              <a href="#resources">Resources</a>
            </li>
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
