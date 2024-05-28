import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ quizStarted, quizFinished }) => {
  const [time, setTime] = useState(25 * 60);

  useEffect(() => {
    let timer;
    if (quizStarted && !quizFinished) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <p data-testid="timer" className="text-gray-950 text-sm md:text-lg">
      {quizFinished && "Time remaining:"} {formattedTime}
    </p>
  );
};

Timer.propTypes = {
  quizStarted: PropTypes.bool.isRequired,
  quizFinished: PropTypes.bool.isRequired,
};

export default Timer;
