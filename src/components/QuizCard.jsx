import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const QuizCard = ({
  practiceQuestions,
  currentQuestionIndex,
  onNextQuestion,
  testQuestions,
  onQuizStart,
  quizStarted,
  onFinishQuiz,
}) => {
  const [selectedStatements, setSelectedStatements] = useState([]);
  const [isStatementSelected, setIsStatementSelected] = useState(false);

  useEffect(() => {
    setSelectedStatements([]);
    setIsStatementSelected(false);
  }, [currentQuestionIndex]);

  const questions = quizStarted ? testQuestions : practiceQuestions;

  if (
    !questions ||
    currentQuestionIndex < 0 ||
    currentQuestionIndex >= questions.length
  ) {
    return <p>No questions available.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const statementSelectionHandler = async (statementIndex) => {
    try {
      const questionId = currentQuestion.id;
      const testTakerId = localStorage.getItem("test_taker_id");
      const token = localStorage.getItem("token");

      const newSelectedStatements = [...selectedStatements];
      const indexToFind = newSelectedStatements.indexOf(statementIndex);

      if (indexToFind === -1) {
        newSelectedStatements.push(statementIndex);
      } else {
        newSelectedStatements.splice(indexToFind, 1);
      }

      setSelectedStatements(newSelectedStatements);
      setIsStatementSelected(newSelectedStatements.length > 0);

      let savingMarkResultsEndpoint;

      if (quizStarted) {
        savingMarkResultsEndpoint = "http://localhost:3000/mark-test-results";
      } else {
        savingMarkResultsEndpoint =
          "http://localhost:3000/mark-practice-results";
      }

      await fetch(savingMarkResultsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          test_taker_id: testTakerId,
          question_id: questionId,
          user_selected_answers: newSelectedStatements,
        }),
      });
    } catch (error) {
      console.error(
        "Error marking the statement for the practice question:",
        error.message
      );
    }
  };

  const nextClickHandler = () => {
    if (isLastQuestion && quizStarted) {
      onFinishQuiz();
    } else {
      onNextQuestion();
    }
  };

  const statements = currentQuestion
    ? Object.keys(currentQuestion)
        .filter(
          (key) =>
            key.startsWith("test_statement_") || key.startsWith("statement_")
        )
        .map((key) => currentQuestion[key])
        .filter((statement) => statement)
    : [];

  return (
    <div
      data-testid="quiz-card"
      className="w-11/12 mt-3 mb-4 md:flex max-w-7xl"
    >
      <div className="md:w-1/2 p-2">
        <img
          src={
            quizStarted
              ? currentQuestion.question_img_url
              : currentQuestion.test_question_img_url
          }
          alt="image"
          className="w-full h-auto border border-gray-300 rounded-md"
        />
      </div>
      <form className="md:w-1/2 p-2 flex flex-col justify-between">
        <div className="md:h-4/5">
          <h2 className="text-2xl text-gray-950 font-semibold mb-2">
            {quizStarted
              ? currentQuestion.question
              : currentQuestion.test_question}
          </h2>
          <p className="text-lg text-gray-950 mb-4">
            {quizStarted ? "" : currentQuestion.test_question_description}
          </p>
          <div className="flex flex-col gap-2">
            {statements.map((statement, index) => (
              <div
                key={index}
                className={`px-3 py-2 border border-gray-300 rounded-md flex items-center transition-colors duration-300 ${
                  selectedStatements.includes(index + 1) ? "bg-gray-200" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={`statement${currentQuestionIndex + 1}-${index + 1}`}
                  className="w-4 h-4 ml-1 mr-3 cursor-pointer"
                  checked={selectedStatements.includes(index + 1)}
                  onChange={() => statementSelectionHandler(index + 1)}
                />
                <div className="w-full">
                  <label
                    htmlFor={`statement${currentQuestionIndex + 1}-${
                      index + 1
                    }`}
                    className="cursor-pointer"
                  >
                    {statement}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex md:justify-end md:items-end md:mt-0">
          {!isLastQuestion && (
            <button
              type="button"
              className={`w-full lg:w-1/3 text-gray-100 py-2 mt-4 transition-all rounded-md ${
                isStatementSelected
                  ? "bg-sky-400 hover:bg-sky-700 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={nextClickHandler}
              disabled={!isStatementSelected}
            >
              Next
            </button>
          )}
          {isLastQuestion && (
            <button
              type="button"
              className={`w-full lg:w-1/3 text-gray-100 py-2 mt-4 transition-all rounded-md ${
                isStatementSelected
                  ? "bg-sky-400 hover:bg-sky-700 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={quizStarted ? nextClickHandler : onQuizStart}
              disabled={!isStatementSelected}
            >
              {quizStarted ? "Finish" : "Start"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

QuizCard.propTypes = {
  practiceQuestions: PropTypes.array.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  onNextQuestion: PropTypes.func.isRequired,
  testQuestions: PropTypes.array.isRequired,
  onQuizStart: PropTypes.func.isRequired,
  quizStarted: PropTypes.bool.isRequired,
  onFinishQuiz: PropTypes.func.isRequired,
};

export default QuizCard;
