import logoImg from "../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>OnlineSales.ai</h1>
    </header>
  );
};

export default Header;
