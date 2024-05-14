import QuizCard from "../components/QuizCard";
import Header from "./Header";
import Results from "./Results";
import { useState, useEffect } from "react";

const Quiz = () => {
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchPracticeQuestions = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/practice-questions"
        );
        if (response.ok) {
          const data = await response.json();
          setPracticeQuestions(data);
        } else {
          console.error("Failed to fetch practice questions");
        }
      } catch (error) {
        console.error("Error fetching practice questions:", error.message);
      }
    };

    fetchPracticeQuestions();
  }, []);

  const startQuizHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/test-questions");
      if (response.ok) {
        const data = await response.json();
        setTestQuestions(data);
        setCurrentQuestionIndex(0);
        setQuizStarted(true);
      } else {
        console.error("Failed to fetch test questions");
      }
    } catch (error) {
      console.error("Error fetching test questions:", error.message);
    }
  };

  const nextQuestionHandler = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const finishQuizHandler = () => {
    setShowResults(true);
    setQuizFinished(true);
  };

  return (
    <>
      <Header quizStarted={quizStarted} quizFinished={quizFinished} />
      {showResults ? (
        <Results />
      ) : (
        <div className="w-full flex justify-center">
          <QuizCard
            practiceQuestions={practiceQuestions}
            testQuestions={testQuestions}
            currentQuestionIndex={currentQuestionIndex}
            onNextQuestion={nextQuestionHandler}
            quizStarted={quizStarted}
            onQuizStart={startQuizHandler}
            onFinishQuiz={finishQuizHandler}
          />
        </div>
      )}
    </>
  );
};

export default Quiz;
