import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import Timer from "./Timer";
import PropTypes from "prop-types";

const Header = ({
  quizStarted,
  quizFinished,
  currentQuestionIndex,
  totalQuestions,
  hasTestQuestions,
}) => {
  const currentQuestionRef = useRef(null);

  useEffect(() => {
    if (currentQuestionRef.current) {
      currentQuestionRef.current.focus();
    }
  }, [currentQuestionIndex]);

  return (
    <header
      data-testid="header"
      className="w-full bg-sky-400 py-2 flex justify-center md:py-4"
      role="banner"
    >
      <div className="w-11/12 max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
          {quizStarted && (
            <span
              className="ml-2 md:ml-4 text-gray-950 text-sm md:text-lg"
              ref={currentQuestionRef}
              tabIndex="-1"
            >
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <Timer
            quizStarted={quizStarted}
            quizFinished={quizFinished}
            hasTestQuestions={hasTestQuestions}
          />
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
  hasTestQuestions: PropTypes.bool.isRequired,
};

export default Header;
