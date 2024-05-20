import playIcon from "../assets/images/play-icon.svg";
import heroImg from "../assets/images/PngItem_127225 1.svg";
const Hero = () => {
  return (
    <div>
      <div className="hero-text">
        <h1>Plant Your Happiness. Grow a Greener World!</h1>
        <p>
          Discover a New Level of Joy and Tranquility Through Indoor and Outdoor
          Gardening. Plant, Grow, and Thrive Together!
        </p>
        <div className="hero-buttons">
          <button>Order Now</button>
          <button>
            <img src={playIcon} alt="play icon" />
            Watch Video
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="a plant" />
      </div>
    </div>
  );
};

export default Hero;
