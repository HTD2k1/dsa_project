import React from "react";
import Keypad from "../Keypad/Keypad";
import MenuBar from "../Menu/Menu";

import "./index.css";

function StatusSection(props) {
  return (
    <div className="status">
      <MenuBar />
      <Keypad 
        onClickNumber={(number) => props.onClickNumber(number)}
      />
    </div>
  );
}

export default StatusSection;
