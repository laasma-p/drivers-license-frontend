const Instructions = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start sm:w-full xl:w-9/12 mx-auto px-8 md:px-32 pt-8 sm:pt-36">
      <h1 className="text-xl md:text-2xl">Welcome to the theory exam.</h1>
      <p className="text-md md:text-lg">The instructions for it as follows:</p>
      <ul className="mt-6 mb-4 w-full text-md md:text-lg">
        <li>
          You have 25 minutes to fill out the test. Each question consists of an
          image about a situation, an explanation of it and several statements
          to which you need to answer either "Yes" or "No".
        </li>
        <li>
          Maximum of five mistakes are allowed to pass the test. One mistake
          counts as when one or more statement in one question are incorrect.
        </li>
        <li>You can go back to the questions as needed.</li>
        <li>
          After you have completed the test, click on "Finish" to submit the
          answers.
        </li>
        <li>
          The result of whether the test is passed is showed immediately, as
          well as mistakes.
        </li>
      </ul>
      <p className="text-md md:text-lg w-full">
        Before the test itself, two test questions will be presented to
        familiarize yourself with the test structure. After clicking on "Start"
        button, the test starts.
      </p>
      <div className="flex justify-center sm:justify-end">
        <button className="text-md sm:text-lg border-0 bg-sky-400 hover:bg-sky-700 mt-4 mb-4 sm:mb-0 sm:mt-12 py-2 px-6 sm:px-10 transition-colors hover:text-gray-100 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Instructions;
