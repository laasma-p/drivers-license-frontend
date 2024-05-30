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
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [hasPassed, setHasPassed] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [hasTestQuestions, setHasTestQuestions] = useState(false);

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

  useEffect(() => {
    const fetchTestQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3000/test-questions");
        if (response.ok) {
          const data = await response.json();
          setTestQuestions(data);
          setHasTestQuestions(data.length > 0);
        } else {
          console.error("Failed to fetch test questions");
        }
      } catch (error) {
        console.error("Error fetching test questions:", error.message);
      }
    };
    fetchTestQuestions();
  }, []);

  const startQuizHandler = () => {
    setCurrentQuestionIndex(0);
    setQuizStarted(true);
  };

  const nextQuestionHandler = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const finishQuizHandler = async () => {
    setShowResults(true);
    setQuizFinished(true);

    try {
      const testTakerId = localStorage.getItem("test_taker_id");
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/results/${testTakerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCorrectQuestions(data.correctQuestions);
        setTotalQuestions(data.totalQuestions);
        setHasPassed(data.hasPassed);
        setIncorrectQuestions(data.incorrectQuestions);
      } else {
        console.error("Failed to fetch the results");
      }
    } catch (error) {
      console.error("Error fetching the results:", error.message);
    }
  };

  return (
    <div data-testid="quiz">
      <Header
        quizStarted={quizStarted}
        quizFinished={quizFinished}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={testQuestions.length}
        hasTestQuestions={hasTestQuestions}
      />
      {showResults ? (
        <Results
          correctQuestions={correctQuestions}
          totalQuestions={totalQuestions}
          hasPassed={hasPassed}
          incorrectQuestions={incorrectQuestions}
        />
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
    </div>
  );
};

export default Quiz;
