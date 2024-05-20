const Results = ({
  correctQuestions,
  totalQuestions,
  hasPassed,
  incorrectQuestions,
}) => {
  return (
    <div className="flex flex-col mx-auto px-8 pt-8 sm:pt-20 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 className="text-xl text-gray-950">
        You have correctly answered {correctQuestions} out of {totalQuestions}{" "}
        questions.
      </h1>
      <p className="w-full mt-6 mb-2 text-gray-950">
        {hasPassed
          ? "You have passed the test."
          : "You have not passed the test."}
      </p>
      <p className="w-full mb-4 text-gray-950">See the mistakes below:</p>
      <div className="flex flex-row flex-wrap gap-2">
        {incorrectQuestions.map((index) => {
          return (
            <div
              key={index}
              className="w-16 h-16 border-2 border-red-200 text-gray-950 hover:text-red-200 flex text-2xl font-semibold justify-center items-center cursor-pointer transition-all"
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
