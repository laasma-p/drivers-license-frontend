import QuizCard from "../components/QuizCard";
import Timer from "../containers/Timer";

const Quiz = () => {
  return (
    <>
      <Timer />
      <div className="w-full flex justify-center">
        <QuizCard />
      </div>
    </>
  );
};

export default Quiz;
