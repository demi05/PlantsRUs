import arrival1 from "../assets/images/PngItem_587574 1.svg";
import arrival2 from "../assets/images/PngItem_5162680 1.svg";
import arrival3 from "../assets/images/PngItem_127225 1.svg";
const ArrivalsLogic = ({ arrivalsData }) => {
  const images = [arrival1, arrival2, arrival3];
  return (
    <div>
      {arrivalsData.map((arrival, index) => (
        <div key={index} className="arrivals-main-div">
          <div className="arrivals-main-img">
            <img src={images[index]} alt={arrival.text1} />
          </div>

          <div className="arrivals-text">
            <p>{arrival.text1}</p>
            <div className="arrival-text-main">
              <h3>{arrival.text2}</h3>
              <h3>{arrival.amount}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrivalsLogic;
