import { useState } from "react";
import PropTypes from "prop-types";

const Authorization = ({ onAuthorization, errorMessage }) => {
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState("");

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const authorizeCodeHandler = async (event) => {
    event.preventDefault();

    const codeFormat = /^[a-zA-Z0-9]{6}$/;

    if (!enteredCode.trim()) {
      setError("Please enter the code.");
      return;
    }

    if (!codeFormat.test(enteredCode)) {
      setError("Invalid code format.");
      return;
    }

    try {
      await onAuthorization(enteredCode);
    } catch (error) {
      console.log("Cannot verify the code", error.message);
    }
  };

  return (
    <div className="container mx-auto font-sans">
      <p
        className="text-xl text-gray-950 px-4 pt-40 pb-6 text-center"
        id="code-instructions"
      >
        Enter the code you have received from the examiner:
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={authorizeCodeHandler}
          className="w-5/6 flex flex-col max-w-md pb-6"
        >
          <p className="text-red-400 text-lg" role="alert" aria-live="polite">
            {error}
          </p>
          <p className="text-red-400 text-lg" role="alert" aria-live="polite">
            {errorMessage}
          </p>
          <label
            htmlFor="code"
            className="text-gray-950 pb-1 text-lg font-semibold"
          >
            Code
          </label>
          <input
            className="text-lg text-gray-950 mb-4 p-2 border border-gray-400 focus:outline-none appearance-none rounded-md focus:border-sky-400"
            type="text"
            id="code"
            value={enteredCode}
            onChange={enteredCodeHandler}
            aria-describedby="code-instructions code-error"
            aria-invalid={error ? "true" : "false"}
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
  errorMessage: PropTypes.string.isRequired,
};

export default Authorization;
