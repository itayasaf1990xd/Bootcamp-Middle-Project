import React from "react";
import "./Button.style.css";

const Button = ({ text, shuffleCards }) => {
  return <button className="button" onClick={shuffleCards}>{text}</button>;
};

export default Button;
