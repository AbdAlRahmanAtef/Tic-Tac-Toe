import { createContext, useContext, useEffect, useState } from "react";
import { calcCpuMove, calcWinner } from "../services/CalcSquares";
import { PopupContext } from "./PopupContext";

export const GameContext = createContext();
export const GameProvider = ({ children }) => {
  const { setshowPopup, setpopupMood } = useContext(PopupContext);
  const [screen, setScreen] = useState("start");
  const [activeUser, setactiveUser] = useState("x");
  const [playMood, setplayMood] = useState("cpu");
  const [squares, setsquares] = useState(new Array(9).fill(""));
  const [xNext, setxNext] = useState(false);
  const [winner, setwinner] = useState(null);
  const [winnerLine, setwinnerLine] = useState(null);
  const [rounds, setrounds] = useState({
    x: 0,
    o: 0,
  });

  useEffect(() => {
    let currentUser = xNext ? "o" : "x";
    if (playMood === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextMove(squares);
    }

    checkNoWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xNext, winner, screen]);

  const changePlayMood = (mood) => {
    setplayMood(mood);
    setScreen("game");
  };

  const handleSquaresClick = (index) => {
    const currentPlayer = !xNext ? "x" : "o";
    const ns = [...squares];
    if (ns[index] === "") {
      ns[index] = currentPlayer;
    } else {
      return;
    }
    setsquares(ns);
    setxNext(!xNext);
    checkWinner(ns);
  };

  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setpopupMood("winner");
      setshowPopup(true);
      setwinner(isWinner.winner);
      setwinnerLine(isWinner.line);
      const ti = { ...rounds };
      ti[isWinner.winner] += 1;
      setrounds(ti);
    }
  };

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setwinner("no");
      setshowPopup(true);
      setpopupMood("winner");
    }
  };

  const cpuNextMove = (sqrs) => {
    let bestmove = calcCpuMove(sqrs, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestmove] = !xNext ? "x" : "o";
    setsquares(ns);
    setxNext(!xNext);
    checkWinner(ns);
  };

  const handleReset = () => {
    setScreen("start");
    setshowPopup(false);
    setsquares(new Array(9).fill(""));
    setrounds({
      x: 0,
      o: 0,
    });
  };

  const handleNextRound = () => {
    setsquares(new Array(9).fill(""));
    setxNext(false);
    setshowPopup(false);
    setwinner(null);
    setwinnerLine(null);
  };

  const resetGame = () => {
    setpopupMood("start");
    setshowPopup(true);
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        setactiveUser,
        changePlayMood,
        squares,
        handleSquaresClick,
        xNext,
        rounds,
        winnerLine,
        winner,
        handleReset,
        handleNextRound,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
