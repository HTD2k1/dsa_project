import React from "react";
import Keypad from "../Keypad/Keypad";
import MenuBar from "../Menu/Menu";

import "./StatusSection.css";

function StatusSection(props) {
  const sudokuTableData = props.sudokuTableData;
  return (
    <div className="status">
      <MenuBar
      //Data
      sudokuTableData={sudokuTableData} 
      undoCellStack={props.undoCellStack}
      redoCellStack={props.redoCellStack} 
      //Handling game Functionality
      onSolveSudoku={solvedTable => props.onSolveSudoku(solvedTable)}
      onUndo ={stacks => props.onUndo(stacks) }
      onRedo ={stacks => props.onRedo(stacks) }
      //Handle change game Mode
      onModeChange ={table => props.onModeChange(table)}

      />

      <Keypad onClickNumber={(number) => props.onClickNumber(number)} />
    </div>
  );
}

export default StatusSection;
