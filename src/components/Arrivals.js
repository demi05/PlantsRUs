import ArrivalsLogic from "./ArrivalsLogic";

const Arrivals = () => {
  const arrivalsData = [
    { text1: "Indoor", text2: "Snake Plant", amount: "$32.00" },
    { text1: "Outdoor", text2: "Fern", amount: "$25.00" },
    { text1: "Indoor", text2: "Evergreen", amount: "$45.00" },
  ];

  return (
    <div className="cat-arr-grid">
      <div className="cat-arr-grid-header">
        <h2>
          New <span>Arrivals</span>
        </h2>
        <p>Explore More</p>
      </div>
      <div className="cat-arr-grid-main">
        <ArrivalsLogic arrivalsData={arrivalsData} />
      </div>
    </div>
  );
};

export default Arrivals;
