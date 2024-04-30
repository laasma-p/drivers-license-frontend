import "./App.css";
import Authorization from "./components/Authorization";
import Instructions from "./components/Instructions";
import Quiz from "./containers/Quiz";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

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
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Error verifying code", error.message);
    }
  };

  return (
    <div className="h-dvh bg-gray-100">
      {!isAuthorized && (
        <Authorization onAuthorization={authorizationHandler} />
      )}
      {isAuthorized && (
        <>
          <Instructions />
          <Quiz />
        </>
      )}
    </div>
  );
}

export default App;
