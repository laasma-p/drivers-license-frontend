import logo from "../assets/logo.png";
import Timer from "./Timer";

const Header = ({ quizStarted, quizFinished }) => {
  return (
    <header className="bg-sky-400 py-2">
      <div className="flex mx-3 md:w-11/12 md:mx-auto">
        <div className="w-3/6 md:w-1/6 flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-3/6 md:w-5/6 flex items-center justify-end">
          <Timer quizStarted={quizStarted} quizFinished={quizFinished} />
        </div>
      </div>
    </header>
  );
};

export default Header;
