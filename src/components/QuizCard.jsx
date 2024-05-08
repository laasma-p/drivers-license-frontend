import image from "../assets/view.jpg";
import { useState } from "react";

const QuizCard = ({
  practiceQuestions,
  currentQuestionIndex,
  onNextQuestion,
}) => {
  const [selectedStatements, setSelectedStatements] = useState([]);

  if (
    !practiceQuestions ||
    currentQuestionIndex < 0 ||
    currentQuestionIndex >= practiceQuestions.length
  ) {
    return <p>No questions available.</p>;
  }

  const currentQuestion = practiceQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === practiceQuestions.length - 1;

  const statementSelectionHandler = (statementIndex) => {
    setSelectedStatements((prevSelectedStatements) => {
      const newSelectedStatements = [...prevSelectedStatements];
      const indexToFind = newSelectedStatements.indexOf(statementIndex);
      if (indexToFind === -1) {
        newSelectedStatements.push(statementIndex);
      } else {
        newSelectedStatements.splice(indexToFind, 1);
      }
      return newSelectedStatements;
    });
  };

  const nextClickHandler = () => {
    onNextQuestion();
    setSelectedStatements([]);
  };

  return (
    <div className="w-11/12 mt-3 md:flex max-w-7xl">
      <div className="md:w-1/2">
        <img src={image} alt="image" height="auto" />
      </div>
      <form className="md:w-1/2">
        <div className="md:h-4/5">
          <h2 className="text-xl text-gray-950 px-2 pt-1">
            {currentQuestion.test_question}
          </h2>
          <p className="text-lg text-gray-950 px-2 pt-1 pb-2">
            {currentQuestion.test_question_description}
          </p>
          <div className="flex flex-col gap-1">
            {[1, 2, 3, 4].map((statementIndex) => (
              <div key={statementIndex} className="px-1 flex items-center">
                <input
                  type="checkbox"
                  id={`statement${currentQuestionIndex + 1}-${statementIndex}`}
                  className="w-4 h-4 ml-1 mr-2 cursor-pointer"
                  checked={selectedStatements.includes(statementIndex)}
                  onChange={() => statementSelectionHandler(statementIndex)}
                />
                <div className="w-fit">
                  <label
                    htmlFor={`statement${
                      currentQuestionIndex + 1
                    }-${statementIndex}`}
                  >
                    {currentQuestion[`test_statement_${statementIndex}`]}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex md:justify-end md:h-1/5 md:items-end mt-4 md:mt-0">
          {!isLastQuestion && (
            <button
              className="w-full md:w-1/5 text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-all rounded-md"
              onClick={nextClickHandler}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizCard;
