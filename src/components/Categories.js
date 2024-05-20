import CategoriesLogic from "./CategoriesLogic";

const Categories = () => {
  const categoriesData = [
    "Interior Plants",
    "Exterior Plants",
    "Flowering Plants",
  ];

  return (
    <div>
      <div className="categories-header">
        <h2>
          <span>Our</span> Categories
        </h2>
      </div>
      <p>Explore More</p>
      <div className="categories-main">
        <CategoriesLogic categoriesData={categoriesData} />
      </div>
    </div>
  );
};

export default Categories;
