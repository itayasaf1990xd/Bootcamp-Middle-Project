import React, { useEffect } from "react";
import Timer from "../Timer/Timer.component";
import "./StopWatch.style.css";

const StopWatch = ({ time, setTime }) => {
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((previousState) => {
        return {
          ...previousState,
          time: previousState.time + 10,
        };
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="stop-watch">
      <Timer time={time} />
    </div>
  );
};

export default StopWatch;
