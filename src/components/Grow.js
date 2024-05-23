import growImg from "../assets/images/Frame 52.svg";
import leaf from "../assets/images/Leaf 4 - Dark Green.svg";
import { motion } from "framer-motion";

const Grow = () => {
  const growData = [
    "Choose the Right Plant",
    "Provide Adequate Light",
    "Water Carefully",
    "Provide Nutrients",
    "Monitor for Pests and Diseases",
  ];
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
      x: 100,
    },
    animate2: (index) => ({
      x: 0,
      transition: {
        delay: 0.5 * index,
        duration: 1.2,
      },
    }),
  };

  return (
    <div className="grow-div">
      <motion.div
        variants={animationVariants}
        initial="initial1"
        whileInView="animate1"
        viewport={{ once: true }}
        className="grow-img"
      >
        <img src={growImg} alt="a plant" />
      </motion.div>
      <div className="grow-text">
        <h2>
          Grow your own Unique<span> Plant</span>
        </h2>
        {growData.map((text, index) => (
          <motion.div
            variants={animationVariants}
            initial="initial2"
            whileInView="animate2"
            viewport={{ once: true }}
            className="grow-text-list"
            key={index}
            custom={index}
          >
            <img src={leaf} alt="leaf icon" />
            <p>{text}</p>
          </motion.div>
        ))}
        <p className="find">Find Out More</p>
      </div>
    </div>
  );
};

export default Grow;
