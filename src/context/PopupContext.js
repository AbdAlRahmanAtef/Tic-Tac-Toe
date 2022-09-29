import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showPopup, setshowPopup] = useState(false);
  const [popupMood, setpopupMood] = useState("winner");

  return (
    <PopupContext.Provider value={{ showPopup,setshowPopup, popupMood, setpopupMood }}>
      {children}
    </PopupContext.Provider>
  );
};
