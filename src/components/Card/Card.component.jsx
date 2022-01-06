import React from "react";
import "./Card.style.css";
import backGeneral from "../../assets/images/memory-cards/back.png";

const Card = ({ card, handleChoice, flipped, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" draggable="false" />
        <img className="back" src={backGeneral} onClick={handleClick} alt="card back" draggable="false" />
      </div>
    </div>
  );
};

export default Card;
