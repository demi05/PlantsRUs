import testimonial1 from "../assets/images/Frame 74.svg";
const Testimonials = () => {
  return (
    <div className="testimonials-div">
      <div className="testimonials-header">
        <h2>
          Our <span>Testimonials</span>
        </h2>
        <p>Explore More</p>
      </div>
      <div className="textimonials-main">
        <div className="testimonials-img">
          <img src={testimonial1} alt="a woman" />
        </div>
        <div className="textimonials-text">
          <p>
            Plant R Us is the place to be for all your leafy needs! From funky
            ferns to majestic monstera, they've got it all. Step into their
            botanical wonderland and let the leafy vibes transport you to a
            world of greenery galore.
          </p>
          <h3>Rebecca Will</h3>
          <p>Plant Lover</p>
          <ul>
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
