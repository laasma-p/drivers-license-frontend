import QuizCard from "../components/QuizCard";
import Header from "./Header";
import { useState, useEffect } from "react";

const Quiz = () => {
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const nextQuestionHandler = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <QuizCard
          practiceQuestions={practiceQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onNextQuestion={nextQuestionHandler}
        />
      </div>
    </>
  );
};

export default Quiz;
