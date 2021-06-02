import React from "react";
import Keypad from "../Keypad/Keypad";
import MenuBar from "../Menu/Menu";

import "./index.css";

function StatusSection(props) {
  const sudokuTableData = props.sudokuTableData;
  return (
    <div className="status">
      <MenuBar sudokuTableData={sudokuTableData} />
      <Keypad onClickNumber={(number) => props.onClickNumber(number)} />
    </div>
  );
}

export default StatusSection;
