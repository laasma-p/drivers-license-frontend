const Results = ({ correctQuestions, totalQuestions, hasPassed }) => {
  return (
    <div className="flex flex-col mx-auto px-8 pt-8 sm:pt-20 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 className="text-xl text-gray-950">
        You have correctly answered {correctQuestions} out of {totalQuestions}{" "}
        questions.
      </h1>
      <p className="w-full mt-6 mb-4 text-gray-950">
        {hasPassed
          ? "You have passed the test."
          : "You have not passed the test."}
      </p>
    </div>
  );
};

export default Results;
