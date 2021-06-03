import React from "react";
import Keypad from "../Keypad/Keypad";
import MenuBar from "../Menu/Menu";

import "./StatusSection.css";

function StatusSection(props) {
  const sudokuTableData = props.sudokuTableData;
  return (
    <div className="status">
      <MenuBar sudokuTableData={sudokuTableData} onSolveSudoku={solvedTable => props.onSolveSudoku(solvedTable)} />
      <Keypad onClickNumber={(number) => props.onClickNumber(number)} />
    </div>
  );
}

export default StatusSection;
