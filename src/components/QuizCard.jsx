import { useState } from "react";

const QuizCard = ({
  practiceQuestions,
  currentQuestionIndex,
  onNextQuestion,
  testQuestions,
  onQuizStart,
  quizStarted,
}) => {
  const [selectedStatements, setSelectedStatements] = useState([]);

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

  const statementSelectionHandler = (statementIndex) => {
    const questionId = currentQuestion.id;
    const testTakerId = localStorage.getItem("test_taker_id");
    const token = localStorage.getItem("token");

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
    <div className="w-11/12 mt-3 md:flex max-w-7xl">
      <div className="md:w-1/2">
        <img
          src={
            quizStarted
              ? currentQuestion.question_img_url
              : currentQuestion.test_question_img_url
          }
          alt="image"
          height="auto"
        />
      </div>
      <form className="md:w-1/2">
        <div className="md:h-4/5">
          <h2 className="text-xl text-gray-950 px-2 pt-1">
            {quizStarted
              ? currentQuestion.question
              : currentQuestion.test_question}
          </h2>
          <p className="text-lg text-gray-950 px-2 pt-1 pb-2">
            {quizStarted ? "" : currentQuestion.test_question_description}
          </p>
          <div className="flex flex-col gap-1">
            {statements.map((statement, index) => (
              <div key={index} className="px-1 flex items-center">
                <input
                  type="checkbox"
                  id={`statement${currentQuestionIndex + 1}-${index + 1}`}
                  className="w-4 h-4 ml-1 mr-2 cursor-pointer"
                  checked={selectedStatements.includes(index + 1)}
                  onChange={() => statementSelectionHandler(index + 1)}
                />
                <div className="w-fit">
                  <label
                    htmlFor={`statement${currentQuestionIndex + 1}-${
                      index + 1
                    }`}
                  >
                    {statement}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex md:justify-end md:h-1/5 md:items-end mt-4 md:mt-0">
          {!isLastQuestion && (
            <button
              type="button"
              className="w-full md:w-1/5 text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-all rounded-md"
              onClick={nextClickHandler}
            >
              Next
            </button>
          )}
          {isLastQuestion && (
            <button
              type="button"
              className="w-full md:w-1/5 text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-all rounded-md"
              onClick={quizStarted ? nextClickHandler : onQuizStart}
            >
              {quizStarted ? "Finish" : "Start"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizCard;
