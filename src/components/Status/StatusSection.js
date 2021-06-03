import React from "react";
import Keypad from "../Keypad/Keypad";
import MenuBar from "../Menu/Menu";

import "./StatusSection.css";

function StatusSection(props) {
  const sudokuTableData = props.sudokuTableData;
  const handleSolve =(props) =>{
    console.log("Handle solve_ StatusSection", props)
  }
  return (
    <div className="status">
      <MenuBar sudokuTableData={sudokuTableData} onHandleSolve={handleSolve} />
      <Keypad onClickNumber={(number) => props.onClickNumber(number)} />
    </div>
  );
}

export default StatusSection;
