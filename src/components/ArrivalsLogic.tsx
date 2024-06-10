import arrival1 from "../assets/images/PngItem_587574 1.svg";
import arrival2 from "../assets/images/PngItem_5162680 1.svg";
import arrival3 from "../assets/images/PngItem_127225 1.svg";
import { motion } from "framer-motion";

type ArrivalsData=  {
  text1: string;
  text2: string;
  amount: string;
};

type ArrivalsDataProp = {
  arrivalsData: ArrivalsData[]
};

const ArrivalsLogic = ({ arrivalsData}:ArrivalsDataProp) => {
  const images = [arrival1, arrival2, arrival3];
  const animationVariants = {
    initial1: {
      scale: 1.2,
    },
    animate1: (index: number) => ({
      scale: 1,
      transition: {
        delay: 0.7 * index,
        duration: 1.5,
      },
    }),
  };

  return (
    <div className="arrivals-main">
      {arrivalsData.map((arrival, index) => (
        <motion.div
          variants={animationVariants}
          initial="initial1"
          whileInView="animate1"
          viewport={{ once: true }}
          key={index}
          custom={index}
          className="arrivals-main-div"
        >
          <div className="arrivals-img">
            <img src={images[index]} alt={arrival.text1} />
          </div>

          <div className="arrivals-text-div">
            <div className="arrivals-main-div-text">
              <p>{arrival.text1}</p>
              <div className="arrivals-text">
                <p>{arrival.text2}</p>
                <p>{arrival.amount}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ArrivalsLogic;
