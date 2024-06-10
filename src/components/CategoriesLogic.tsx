import category1 from "../assets/images/PngItem_587574 1.svg";
import category2 from "../assets/images/PngItem_5162680 1.svg";
import { motion } from "framer-motion";

type CategoriesLogicProp = {
  categoriesData: string[];
}

const CategoriesLogic = ({ categoriesData}: CategoriesLogicProp) => {

  const images = [category1, category2];
  const animationVariants = {
    initial1: {
      scale: 1.1,
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
    <div className="categories-main">
      {categoriesData.map((category, index) => (
        <motion.div
          variants={animationVariants}
          initial="initial1"
          whileInView="animate1"
          viewport={{ once: true }}
          key={index}
          custom={index}
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
