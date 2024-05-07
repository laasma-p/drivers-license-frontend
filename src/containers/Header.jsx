import logo from "../assets/logo.png";
import Timer from "./Timer";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Timer />
        </div>
      </div>
    </header>
  );
};

export default Header;
