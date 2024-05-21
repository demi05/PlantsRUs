import arrival1 from "../assets/images/PngItem_587574 1.svg";
import arrival2 from "../assets/images/PngItem_5162680 1.svg";
import arrival3 from "../assets/images/PngItem_127225 1.svg";

const ArrivalsLogic = ({ arrivalsData }) => {
  const images = [arrival1, arrival2, arrival3];

  return (
    <div className="arrivals-main">
      {arrivalsData.map((arrival, index) => (
        <div key={index} className="arrivals-main-div">
          <div className="arrivals-main-div-img">
            <div className="arrivals-img">
              <img src={images[index]} alt={arrival.text1} />
            </div>
          </div>

          <div className="arrivals-text-div">
            <div className="arrivals-main-div-text">
              <p>{arrival.text1}</p>
              <div className="arrivals-text">
                <p>{arrival.text2}</p>
                <p>{arrival.amount}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrivalsLogic;
