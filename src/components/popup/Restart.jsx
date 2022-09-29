import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { PopupContext } from "../../context/PopupContext";

const Restart = () => {
  const { setshowPopup } = useContext(PopupContext);
  const { handleReset } = useContext(GameContext);

  return (
    <div className="restart">
      <h3 className="restart__title">restart game ?</h3>
      <div className="restart__btns">
        <button className="btn btn-sm" onClick={() => setshowPopup(false)}>
          no
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleReset}>
          yes
        </button>
      </div>
    </div>
  );
};

export default Restart;
