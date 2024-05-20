import cartIcon from "../assets/images/shopping-cart-03.svg";
const Nav = () => {
  return (
    <div className="nav">
      <h2>Plants R Us</h2>
      <ul className="nav-elements">
        <li className="active">Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Catalogue</li>
      </ul>
      <div className="cart">
        <img src={cartIcon} alt="cart icon" />
        <p>2</p>
      </div>
    </div>
  );
};

export default Nav;
