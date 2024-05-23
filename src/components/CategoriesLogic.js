import category1 from "../assets/images/PngItem_587574 1.svg";
import category2 from "../assets/images/PngItem_5162680 1.svg";
import { motion } from "framer-motion";

const CategoriesLogic = ({ categoriesData }) => {
  const images = [category1, category2];

  return (
    <div className="categories-main">
      {categoriesData.map((category, index) => (
        <motion.div
          animate={{ scale: [1.1, 1] }}
          transition={{ duration: 1.5 }}
          key={index}
          className="categories-main-div"
        >
          <div className="categories-main-div-img">
            <img src={index === 2 ? images[0] : images[index]} alt={category} />
          </div>
          <div className="categories-main-div-text">
            <h3>{category}</h3>
            <p>Shop Now</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoriesLogic;
