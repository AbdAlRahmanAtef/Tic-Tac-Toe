import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import OIcon from "../../icons/OIcon";
import XIcon from "../../icons/XIcon";

const Win = () => {
  const { winner, handleReset, handleNextRound } = useContext(GameContext);

  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>You win!</p>
          <h3
            className={`score__title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}
          >
            {winner === "x" ? <XIcon /> : <OIcon />} takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">No winner</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-sm" onClick={() => handleReset()}>
          Quite
        </button>
        <button
          className="btn btn-sm btn-yellow"
          onClick={() => handleNextRound()}
        >
          next round
        </button>
      </div>
    </div>
  );
};

export default Win;
