import { useState } from "react";

const Instructions = ({ onNavigate }) => {
  const [continueClick, setContinueClick] = useState(false);

  const navigateToNextHandler = () => {
    setContinueClick(true);
    onNavigate();
  };

  return (
    <div className="container flex flex-col mx-auto px-8 pt-8 sm:pt-20 md:max-w-2xl">
      <h1 className="text-xl text-gray-950">Welcome to the theory exam.</h1>
      <p className="text-lg text-gray-950">
        The instructions for it are as follows:
      </p>
      <ul className="mt-6 mb-4 text-gray-950">
        <li>
          You have 25 minutes to fill out the test. Each question consists of an
          image about a situation, an explanation of it and several statements
          that you have to check if the step has to be fulfilled in the
          situation.
        </li>
        <li>
          Maximum of five mistakes are allowed to pass the test. One mistake
          equals to one or more incorrect or not marked statements in a
          question.
        </li>
        <li>
          After you have completed the test, click on "Finish" to submit the
          answers.
        </li>
        <li>
          The result of whether the test is passed is showed immediately, as
          well as mistakes (if any).
        </li>
      </ul>
      <p className="text-gray-950">
        Before the test itself, two test questions will be presented to
        familiarize yourself with the test structure. After clicking on "Start"
        button, the test starts.
      </p>
      <div className="flex sm:justify-end">
        <button
          onClick={navigateToNextHandler}
          className="w-full sm:w-28 mt-4 text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-colors rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Instructions;
