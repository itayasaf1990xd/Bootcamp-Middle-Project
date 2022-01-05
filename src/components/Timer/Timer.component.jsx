import React from "react";
import "./Timer.style.css";

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 10) % 60)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;
