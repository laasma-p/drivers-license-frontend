import "./App.css";
import Authorization from "./components/Authorization";
import Instructions from "./components/Instructions";
import Quiz from "./containers/Quiz";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [displayQuiz, setDisplayQuiz] = useState(false);

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
      }
    } catch (error) {
      console.error("Error verifying code", error.message);
    }
  };

  const navigateToQuizHandler = () => {
    setDisplayQuiz(true);
  };

  return (
    <div className="w-full min-h-dvh bg-gray-100">
      {!isAuthorized && (
        <Authorization onAuthorization={authorizationHandler} />
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
