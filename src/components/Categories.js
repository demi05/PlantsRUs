import CategoriesLogic from "./CategoriesLogic";

const Categories = () => {
  const categoriesData = [
    "Interior Plants",
    "Exterior Plants",
    "Flowering Plants",
  ];

  return (
    <div className="categories-div">
      <div className="categories-header">
        <h2>
          Our <span>Categories</span>
        </h2>
        <p>Explore More</p>
      </div>
      <div>
        <CategoriesLogic categoriesData={categoriesData} />
      </div>
    </div>
  );
};

export default Categories;
