import category1 from "../assets/images/PngItem_587574 1.svg";
import category2 from "../assets/images/PngItem_5162680 1.svg";
// import category3 from "../assets/images/PngItem_127225 1.svg";

const CategoriesLogic = ({ categoriesData }) => {
  const images = [category1, category2];

  return (
    <div>
      {categoriesData.map((category, index) => (
        <div key={index} className="categories-main-div">
          <div className="categories-main-div-img">
            <img src={index === 2 ? images[0] : images[index]} alt={category} />
          </div>
          <div className="categories-main-div-text">
            <h3>{category}</h3>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesLogic;
