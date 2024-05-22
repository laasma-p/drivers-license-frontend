import logo from "../assets/logo.png";
import Timer from "./Timer";

const Header = ({
  quizStarted,
  quizFinished,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <header className="w-full h-16 bg-sky-400 py-2 flex justify-center">
      <div className="flex w-11/12 items-center justify-center mx-auto">
        <div className="w-3/6 flex items-center justify-start">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
        <div className="w-3/6 flex items-center justify-end">
          {quizStarted && (
            <span className="text-gray-950 text-lg px-4">
              Question {currentQuestionIndex + 1} out of {totalQuestions}
            </span>
          )}
          <Timer quizStarted={quizStarted} quizFinished={quizFinished} />
        </div>
      </div>
    </header>
  );
};

export default Header;
