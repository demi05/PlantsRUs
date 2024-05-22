import playIcon from "../assets/images/play-icon.svg";
import heroImg from "../assets/images/PngItem_127225 1.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <motion.h1 whileHover={{ x: 100 }} transition={{ delay: 0.1 }}>
          Plant Your Happiness. Grow a <span>Greener </span>World!
        </motion.h1>
        <p>
          Discover a New Level of Joy and Tranquility Through Indoor and Outdoor
          Gardening. Plant, Grow, and Thrive Together!
        </p>
        <div className="hero-buttons">
          <button>Order Now</button>
          <button>
            <img src={playIcon} alt="play icon" />
            Watch Video
          </button>
        </div>
      </div>
      <motion.div
        whileHover={{ x: -100 }}
        transition={{ delay: 0.1 }}
        className="hero-img"
      >
        <img src={heroImg} alt="a plant" />
      </motion.div>
    </div>
  );
};

export default Hero;
