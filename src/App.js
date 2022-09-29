import { useContext } from "react";
import "./App.css";
import Game from "./components/Game";
import Home from "./components/Home";
import Modal from "./components/popup/Modal";
import { GameContext } from "./context/GameContext";

function App() {
  const { screen } = useContext(GameContext);

  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Home /> : <Game />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
