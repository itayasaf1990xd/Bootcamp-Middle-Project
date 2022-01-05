import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card.component";
import Button from "../../components/Button/Button.component";
import StopWatch from "../../components/StopWatch/StopWatch.component";
import { cardImages } from "../../utilities/Data/Data.utility";
import "./MemoryCard.style.css";

const Memory = () => {
  const [memory, setMemory] = useState({
    cards: [],
    turns: 0,
    score: 0,
    choiceOne: null,
    choiceTwo: null,
    disabled: false,
    time: 0,
  });
  const [time, setTime] = useState(0);

  // Start new game automagically:
  useEffect(() => {
    shuffleCards();
  }, []);

  // Compare two selected cards:
  useEffect(() => {
    if (memory.choiceOne && memory.choiceTwo) {
      setMemory((previousState) => {
        return {
          ...previousState,
          disabled: true,
          score: previousState.score - 50,
        };
      });
      if (memory.choiceOne.src === memory.choiceTwo.src) {
        setMemory((previousState) => {
          return {
            ...previousState,
            score: previousState.score + 150,
            cards: previousState.cards.map((card) => {
              if (card.src === memory.choiceOne.src) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            }),
          };
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [memory.choiceOne, memory.choiceTwo]);

  // Shuffle cards for new game:
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setMemory((previousState) => {
      return {
        ...previousState,
        choiceOne: null,
        choiceTwo: null,
        score: 0,
        cards: shuffledCards,
        turns: 0,
        time: 0,
      };
    });
  };

  // Handle player choice:
  const handleChoice = (card) => {
    if (memory.choiceOne) {
      setMemory((previousState) => {
        return { ...previousState, choiceTwo: card };
      });
    } else {
      setMemory((previousState) => {
        return { ...previousState, choiceOne: card };
      });
    }
  };

  // Reset choices and increase turn:
  const resetTurn = () => {
    setMemory((previousState) => {
      return {
        ...previousState,
        choiceOne: null,
        choiceTwo: null,
        disabled: false,
        turns: previousState.turns + 1,
      };
    });
  };

  return (
    <div className="memory-card container">
      <h1 className="title">Memory Card</h1>
      <div className="tools">
        <StopWatch time={memory.time} setTime={setMemory} />
        <div className="turn">Turns: {memory.turns}</div>
        <div className="score">Score: {memory.score}</div>
        <Button text="New Game" shuffleCards={shuffleCards} />
      </div>
      <div className="cards">
        {memory.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === memory.choiceOne ||
              card === memory.choiceTwo ||
              card.matched
            }
            disabled={memory.disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Memory;
