import { useState } from "react";

const Authorization = () => {
  const [enteredCode, setEnteredCode] = useState("");

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center pt-40">
      <form
        method="POST"
        className="flex flex-col items-center font-sans p-8 mx-6"
      >
        <label htmlFor="code" className="px-4 text-lg md:text-2xl text-center">
          Enter the code you have received from the examinator:
        </label>
        <input
          className="max-w-full mt-8 mb-4 p-2 md:w-4/6 mx-auto border-2 border-gray-400 rounded-md"
          type="text"
          id="code"
          value={enteredCode}
          onChange={enteredCodeHandler}
        />
        <button
          type="submit"
          className="md:text-lg border-0 bg-sky-400 hover:bg-sky-700 py-2 px-6 md:px-10 transition-colors hover:text-gray-100 mx-auto rounded-md"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Authorization;
