import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ quizStarted, quizFinished, hasTestQuestions }) => {
  const [time, setTime] = useState(25 * 60);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    let timer;
    if (quizStarted && !quizFinished && hasTestQuestions) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }

          if (prevTime === 300) {
            setAlertMessage("5 minutes remaining.");
          }

          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished, hasTestQuestions]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <>
      <p
        data-testid="timer"
        className="text-gray-950 text-sm md:text-lg"
        aria-hidden="true"
      >
        {quizFinished && "Time remaining:"} {formattedTime}
      </p>
      <p role="alert" aria-live="assertive" className="sr-only">
        {alertMessage}
      </p>
    </>
  );
};

Timer.propTypes = {
  quizStarted: PropTypes.bool.isRequired,
  quizFinished: PropTypes.bool.isRequired,
  hasTestQuestions: PropTypes.bool.isRequired,
};

export default Timer;
