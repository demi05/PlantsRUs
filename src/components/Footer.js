import twitterLogo from "../assets/images/logo-twitter.svg";
import instagramLogo from "../assets/images/logo-instagram.svg";
import linkednLogo from "../assets/images/logo-linkedin.svg";
import facebookLogo from "../assets/images/logo-facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-element">
          <h3>Company</h3>
        </div>
        <div className="footer-element">
          <h3>Product</h3>
        </div>
        <div className="footer-element">
          <h3>Services</h3>
        </div>
        <div className="footer-element">
          <h3>Legal</h3>
        </div>
        <div className="footer-element">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="footer-attribution">
        <p>© 2020 Copyright, All Right Reserved, plants r us</p>
        <div className="social-icons">
          <img src={twitterLogo} alt="twitter logo" />
          <img src={facebookLogo} alt="facebook logo" />
          <img src={instagramLogo} alt="instagram logo" />
          <img src={linkednLogo} alt="linkedn logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
