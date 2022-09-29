import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import Restart from "./Restart";
import Win from "./Win";

const Modal = () => {
  const { showPopup, popupMood } = useContext(PopupContext);

  return (
    <>
      {showPopup && (
        <div className="modal">
          <div className="modal__content">
            <div className="container">
              {popupMood === "winner" ? <Win /> : <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
