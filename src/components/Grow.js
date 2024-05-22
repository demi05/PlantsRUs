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
  return (
    <div className="grow-div">
      <motion.div
        whileHover={{ x: 100 }}
        transition={{ delay: 0.1 }}
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
            whileHover={{ x: -50 }}
            transition={{ delay: 0.1 }}
            className="grow-text-list"
            key={index}
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
