import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import OIcon from "../icons/OIcon";
import XIcon from "../icons/XIcon";
import GameCard from "./GameCard";

const Game = () => {
  const { squares, xNext, rounds, winner, winnerLine, resetGame } =
    useContext(GameContext);
  return (
    <div className="board">
      <div className="board__header">
        <div>
          <XIcon />
          <OIcon />
        </div>
        <div className="board__turn">
          {!xNext ? (
            <XIcon color="light" size="sm" />
          ) : (
            <OIcon color="light" size="sm" />
          )}
          turn
        </div>
        <div>
          <button onClick={resetGame} className="btn btn-sm board__restart">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="redo"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
              ></path>
            </svg>{" "}
          </button>
        </div>
      </div>
      <div className="board__body">
        {squares.map((square, i) => (
          <GameCard
            key={i}
            index={i}
            user={square}
            active={winner && winnerLine && winnerLine.includes(i)}
          />
        ))}
      </div>
      <div className="board__footer">
        <div className="card bg-blue">
          <p className="text-light">x </p>
          <strong className="text-2xl">{rounds.x} </strong>
        </div>
        <div className="card bg-light">
          <p className="text-light">ties</p>
          <strong className="text-2xl">{rounds.x + rounds.o} </strong>
        </div>
        <div className="card bg-yellow">
          <p className="text-light">o</p>
          <strong className="text-2xl">{rounds.o} </strong>
        </div>
      </div>
    </div>
  );
};

export default Game;
