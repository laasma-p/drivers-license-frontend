import QuizCard from "../components/QuizCard";
import Header from "./Header";

const Quiz = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <QuizCard />
      </div>
    </>
  );
};

export default Quiz;
