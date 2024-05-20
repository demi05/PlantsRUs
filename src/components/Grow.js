import growImg from "../assets/images/Frame 52.svg";
import leaf from "../assets/images/Leaf 4 - Dark Green.svg";

const Grow = () => {
  const growData = [
    "Choose the Right Plant",
    "Provide Adequate Light",
    "Water Carefully",
    "Provide Nutrients",
    "Monitor for Pests and Diseases",
  ];
  return (
    <div className="grow-div">
      <div className="grow-img">
        <img src={growImg} alt="a plant" />
      </div>
      <div className="grow-text">
        <h2>
          Grow your own Unique<span> Plant</span>
        </h2>
        {growData.map((text, index) => (
          <div className="grow-text-list" key={index}>
            <img src={leaf} alt="leaf icon" />
            <p>{text}</p>
          </div>
        ))}
        <p>Find Out More</p>
      </div>
    </div>
  );
};

export default Grow;
