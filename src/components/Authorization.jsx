import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Authorization = ({ onAuthorization, errorMessage }) => {
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const focusHeader = document.getElementById("code-instructions");
    if (focusHeader) {
      return focusHeader.focus();
    }
  }, []);

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
    <div className="container mx-auto font-sans" role="main">
      <h1
        className="text-xl text-gray-950 px-4 pt-40 pb-6 text-center"
        id="code-instructions"
        tabIndex="-1"
      >
        Enter the code you have received from the examiner:
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={authorizeCodeHandler}
          className="w-5/6 flex flex-col max-w-md pb-6"
          aria-describedby="form-instructions error-message"
        >
          <p
            className="text-red-400 text-lg"
            role="alert"
            aria-live="polite"
            id="error-message"
          >
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
            aria-describedby="code-description"
            aria-invalid={!!error}
          />
          <p id="code-description" className="sr-only">
            Enter the 6-character code provided by the examiner.
          </p>
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
