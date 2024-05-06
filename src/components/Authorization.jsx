import { useState } from "react";

const Authorization = ({ onAuthorization }) => {
  const [enteredCode, setEnteredCode] = useState("");

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const authorizeCodeHandler = async (event) => {
    event.preventDefault();

    try {
      await onAuthorization(enteredCode);
    } catch (error) {
      console.log("Cannot verify the code", error.message);
    }
  };

  return (
    <div className="w-full font-sans">
      <p className="text-xl text-gray-950 px-4 pt-40 pb-6 text-center">
        Enter the code you have received from the examiner
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={authorizeCodeHandler}
          className="w-5/6 flex flex-col max-w-md pb-6"
        >
          <label htmlFor="code" className="text-gray-950 pb-1 text-lg">
            Code
          </label>
          <input
            className="text-gray-950 mb-4 p-2 border border-gray-400 focus:border-2 focus:border-gray-950 outline-0 rounded-md"
            type="text"
            id="code"
            value={enteredCode}
            onChange={enteredCodeHandler}
          />
          <button
            type="submit"
            className="text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 rounded-md transition-all"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
