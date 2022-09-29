import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameProvider } from "./context/GameContext";
import { PopupProvider } from "./context/PopupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PopupProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </PopupProvider>
  </React.StrictMode>
);
