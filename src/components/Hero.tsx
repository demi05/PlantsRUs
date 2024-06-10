import playIcon from "../assets/images/play-icon.svg";
import heroImg from "../assets/images/PngItem_127225 1.svg";
import { motion } from "framer-motion";

const Hero = () => {
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
      x: -100,
    },
    animate2: {
      x: 0,
      transition: {
        delay: 0.35,
        duration: 1.5,
      },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <motion.h1
          variants={animationVariants}
          initial="initial1"
          whileInView="animate1"
          viewport={{ once: true }}
        >
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
        variants={animationVariants}
        initial="initial1"
        whileInView="animate1"
        viewport={{ once: true }}
        className="hero-img"
      >
        <img src={heroImg} alt="a plant" />
      </motion.div>
    </section>
  );
};

export default Hero;
