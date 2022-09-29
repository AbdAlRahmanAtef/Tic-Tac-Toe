import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import OIcon from "../icons/OIcon";
import XIcon from "../icons/XIcon";

const GameCard = ({ user = "null", active, index }) => {
  const { handleSquaresClick } = useContext(GameContext);

  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
        } ${!active ? "shadow-gray" : 'active'}`}
      onClick={() => handleSquaresClick(index)}
    >
      {user === "x" && <XIcon color={active && "dark"} size="lg" />}
      {user === "o" && <OIcon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default GameCard;
