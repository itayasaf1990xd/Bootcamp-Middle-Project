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
    scores: 0,
    choiceOne: null,
    choiceTwo: null,
    isDisabled: false,
    time: 0,
    isWon: false,
  });
  // Compare two selected cards:
  useEffect(() => {
    if (!memory.cards.length) {
      shuffleCards();
    }
    if (memory.choiceOne && memory.choiceTwo) {
      setMemory((previousState) => {
        return {
          ...previousState,
          isDisabled: true,
          scores: previousState.scores - 50,
        };
      });
      if (memory.choiceOne.src === memory.choiceTwo.src) {
        setMemory((previousState) => {
          return {
            ...previousState,
            scores: previousState.scores + 150,
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
    } else {
      if (memory.turns >= 5) {
        const winningStatus = memory.cards.every((card) => {
          return card.matched === true;
        });
        if (winningStatus) {
          setMemory((previousState) => {
            return {
              ...previousState,
              isWon: true,
            };
          });
        }
      }
    }
  }, [
    memory.choiceOne,
    memory.choiceTwo,
    memory.cards,
    memory.isWon,
    memory.turns,
  ]);

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
        scores: 0,
        cards: shuffledCards,
        turns: 0,
        time: 0,
        isWon: false,
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
        isDisabled: false,
        turns: previousState.turns + 1,
      };
    });
  };

  return (
    <div className="memory-card container">
      <h1 className="title">Memory Cards</h1>
      <div className="tools">
        <StopWatch
          time={memory.time}
          setTime={setMemory}
          isWon={memory.isWon}
        />
        <div className="turn">Turns: {memory.turns}</div>
        <div className="score">Scores: {memory.scores}</div>
        <Button text="New Game" onButtonClick={shuffleCards} />
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
            isDisabled={memory.isDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Memory;
