import logo from "../../assets/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <img alt="logo" src={logo} />
      </div>
      <h3 className="header__title">Simple, as you need</h3>
    </header>
  );
};

export default Header;
