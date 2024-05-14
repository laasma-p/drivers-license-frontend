import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(25 * 60);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <p className="text-lg">
      {`${minutes}:${seconds.toString().padStart(2, "0")}`}
    </p>
  );
};

export default Timer;
