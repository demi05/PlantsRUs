import ArrivalsLogic from "./ArrivalsLogic";

const Arrivals = () => {
  const arrivalsData = [
    { text1: "Indoor", text2: "Snake Plant", amount: "$32.00" },
    { text1: "Outdoor", text2: "Fern", amount: "$25.00" },
    { text1: "Indoor", text2: "Evergreen", amount: "$45.00" },
  ];

  return (
    <section className="arrivals-div" id="arrivals">
      <div className="arrivals-header">
        <h2>
          New <span>Arrivals</span>
        </h2>
        <p>Explore More</p>
      </div>
      <div>
        <ArrivalsLogic arrivalsData={arrivalsData} />
      </div>
    </section>
  );
};

export default Arrivals;
