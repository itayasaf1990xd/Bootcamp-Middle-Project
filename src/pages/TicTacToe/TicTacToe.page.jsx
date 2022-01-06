import React, { useState, useEffect } from "react";
import "./TicTacToe.style.css";
import { clearState } from "../../utilities/Data/Data.utility";
import Table from "./../../components/Table/Table.component";
import Button from "../../components/Button/Button.component";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(clearState);
  const [isXTurn, setisXTurn] = useState(false);

  const onPlayerClick = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXTurn ? "X" : "O";
    setisXTurn(!isXTurn);
    setGameState(strings);
  };

  const startNewGame = () => {
    setGameState(clearState);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      startNewGame();
      alert(`Greate, ${winner} won the Game!`);
    }
  });

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="tic-tac-toe-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="down">
        <Button text="New Game" onButtonClick={startNewGame} />
      </div>
      <div className="row table-center">
        <Table
          className="b-bottom-right"
          onClick={() => onPlayerClick(0)}
          state={gameState[0]}
        />
        <Table
          className="b-bottom-right"
          onClick={() => onPlayerClick(1)}
          state={gameState[1]}
        />
        <Table
          className="b-bottom"
          onClick={() => onPlayerClick(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row table-center">
        <Table
          className="b-bottom-right"
          onClick={() => onPlayerClick(3)}
          state={gameState[3]}
        />
        <Table
          className="b-bottom-right"
          onClick={() => onPlayerClick(4)}
          state={gameState[4]}
        />
        <Table
          className="b-bottom"
          onClick={() => onPlayerClick(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row table-center">
        <Table
          className="b-right"
          onClick={() => onPlayerClick(6)}
          state={gameState[6]}
        />
        <Table
          className="b-right"
          onClick={() => onPlayerClick(7)}
          state={gameState[7]}
        />
        <Table onClick={() => onPlayerClick(8)} state={gameState[8]} />
      </div>
    </div>
  );
};

export default TicTacToe;
