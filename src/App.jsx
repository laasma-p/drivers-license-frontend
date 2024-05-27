import "./App.css";
import Authorization from "./components/Authorization";
import Instructions from "./components/Instructions";
import Quiz from "./containers/Quiz";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const authorizationHandler = async (enteredCode) => {
    try {
      const response = await fetch("http://localhost:3000/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: enteredCode }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          if (data.userId) {
            localStorage.setItem("test_taker_id", data.userId);
            setIsAuthorized(true);
          }
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error("Error verifying code", error.message);
      setErrorMessage("Cannot verify the code.");
    }
  };

  const navigateToQuizHandler = () => {
    setDisplayQuiz(true);
  };

  return (
    <div className="w-full min-h-dvh bg-gray-100">
      {!isAuthorized && (
        <Authorization
          onAuthorization={authorizationHandler}
          errorMessage={errorMessage}
        />
      )}
      {isAuthorized && !displayQuiz && (
        <>
          <Instructions onNavigate={navigateToQuizHandler} />
        </>
      )}
      {isAuthorized && displayQuiz && <Quiz />}
    </div>
  );
}

export default App;
