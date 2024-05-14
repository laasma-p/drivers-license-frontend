import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(25 * 60);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <p className="text-lg">
      {`${minutes}:${seconds.toString().padStart(2, "0")}`}
    </p>
  );
};

export default Timer;
