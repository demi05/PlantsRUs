import resource1 from "../assets/images/Frame 62.svg";
import resource2 from "../assets/images/Frame 63.svg";
import { motion } from "framer-motion";

const Resources = () => {
  const images = [resource1, resource2];

  const resourcesData = [
    {
      text1: "Top 10 Pottery Pots to Buy",
      text2:
        "These new pottery pots are best to keep your plants alive. In this article we will...",
    },
    {
      text1: "These Plants will Survive in Winter",
      text2:
        "If you live in a cold climate, we have the perfect plants for you...",
    },
  ];

  const animationVariants = {
    initial1: {
      y: 100,
    },
    animate1: (index: number) => ({
      y: 0,
      transition: {
        delay: 0.5 * index,
        duration: 1.5,
      },
    }),
  };

  return (
    <section className="resources-div" id="resources">
      <div className="resources-header">
        <h2>Explore Resources</h2>
        <p>Find More</p>
      </div>
      <div className="resources-main-div">
        {resourcesData.map((resource, index) => (
          <motion.div
            variants={animationVariants}
            initial="initial1"
            whileInView="animate1"
            viewport={{ once: true }}
            className="resources-main"
            key={index}
            custom={index}
          >
            <div key={index} className="resources-main-img">
              <img src={images[index]} alt="plants" />
            </div>
            <div className="resources-main-text">
              <h3>{resource.text1}</h3>
              <p>{resource.text2}</p>
              <p className="read-more">Read More</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
