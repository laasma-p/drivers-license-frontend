import { useState } from "react";
import PropTypes from "prop-types";

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
    <div className="container mx-auto font-sans">
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
            className="text-lg text-gray-950 mb-4 p-2 border border-gray-400 focus:outline-none appearance-none rounded-md focus:border-sky-400"
            type="text"
            id="code"
            value={enteredCode}
            onChange={enteredCodeHandler}
          />
          <button
            type="submit"
            className="text-lg text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 rounded-md transition-all"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

Authorization.propTypes = {
  onAuthorization: PropTypes.func.isRequired,
};

export default Authorization;
