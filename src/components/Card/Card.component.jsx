import React from "react";
import "./Card.style.css";
import backGeneral from "../../assets/images/memory-cards/back.png";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={backGeneral} onClick={handleClick} alt="card back" />
      </div>
    </div>
  );
};

export default Card;
