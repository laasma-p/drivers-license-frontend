import logo from "../assets/logo.png";
import Timer from "./Timer";
import PropTypes from "prop-types";

const Header = ({
  quizStarted,
  quizFinished,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <header className="w-full bg-sky-400 py-2 flex justify-center md:py-4">
      <div className="w-11/12 max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
          {quizStarted && (
            <span className="ml-2 md:ml-4 text-gray-950 text-sm md:text-lg">
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <Timer quizStarted={quizStarted} quizFinished={quizFinished} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  quizStarted: PropTypes.bool.isRequired,
  quizFinished: PropTypes.bool.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Header;
