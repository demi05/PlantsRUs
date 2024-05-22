import arrival1 from "../assets/images/PngItem_587574 1.svg";
import arrival2 from "../assets/images/PngItem_5162680 1.svg";
import arrival3 from "../assets/images/PngItem_127225 1.svg";
import { motion } from "framer-motion";

const ArrivalsLogic = ({ arrivalsData }) => {
  const images = [arrival1, arrival2, arrival3];

  return (
    <div className="arrivals-main">
      {arrivalsData.map((arrival, index) => (
        <motion.div
          whileHover={{ scale: 1.2 }}
          key={index}
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
