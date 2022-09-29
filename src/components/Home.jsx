import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

import OIcon from "../icons/OIcon";
import XIcon from "../icons/XIcon";

const Home = () => {
  const { activeUser, setactiveUser, changePlayMood } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <XIcon />
        <OIcon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players">
          <span
            onClick={() => setactiveUser("x")}
            className={activeUser === "x" ? "start__players--active" : ""}
          >
            <XIcon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            onClick={() => setactiveUser("o")}
            className={activeUser === "o" ? "start__players--active" : ""}
          >
            <OIcon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light text-normal">remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button
          className="btn btn-yellow"
          onClick={() => {
            changePlayMood("cpu");
          }}
        >
          new game (vs CPU)
        </button>
        <button
          className="btn btn-blue"
          onClick={() => {
            changePlayMood("user");
          }}
        >
          {" "}
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Home;
