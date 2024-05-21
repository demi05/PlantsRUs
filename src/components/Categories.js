import CategoriesLogic from "./CategoriesLogic";

const Categories = () => {
  const categoriesData = [
    "Interior Plants",
    "Exterior Plants",
    "Flowering Plants",
  ];

  return (
    <div className="cat-arr-grid">
      <div className="cat-arr-grid-header categories-header">
        <h2>
          Our <span>Categories</span>
        </h2>
        <p>Explore More</p>
      </div>
      <div className="cat-arr-grid-main">
        <CategoriesLogic categoriesData={categoriesData} />
      </div>
    </div>
  );
};

export default Categories;
