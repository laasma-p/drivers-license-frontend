import PropTypes from "prop-types";

const Results = ({ correctQuestions, totalQuestions, hasPassed }) => {
  return (
    <div
      data-testid="results"
      className="flex flex-col mx-auto px-8 pt-8 sm:pt-20 md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      role="region"
      aria-labelledby="results"
    >
      <h1 id="results" className="text-xl text-gray-950">
        You have correctly answered {correctQuestions} out of {totalQuestions}{" "}
        questions.
      </h1>
      <p aria-live="polite" className="w-full mt-6 mb-2 text-gray-950">
        {hasPassed
          ? "You have passed the test."
          : "You have not passed the test."}
      </p>
    </div>
  );
};

Results.propTypes = {
  correctQuestions: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  hasPassed: PropTypes.bool.isRequired,
};

export default Results;
