import logo from "../assets/logo.png";
import Timer from "./Timer";

const Header = () => {
  return (
    <header className="bg-sky-400 py-2">
      <div className="flex mx-3 mx-2">
        <div className="w-3/6">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-3/6 flex items-center justify-end">
          <Timer />
        </div>
      </div>
    </header>
  );
};

export default Header;
