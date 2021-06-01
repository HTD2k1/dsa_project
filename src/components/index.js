import React from "react";
import GameTable from "./Game/GameTable";
import Keypad from "./Keypad/Keypad";

import "./index.css";
import StatusSection from "./Status";
import { SUDOKU_DATA } from "../config/constants/gameData";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function GameSection(props) {
  const forceUpdate = useForceUpdate();
  const [sudokuTableData, setSudokuTableData] = React.useState(SUDOKU_DATA);
  const [clickCell, setClickCell] = React.useState({
    rowIndex: null,
    colIndex: null,
    cellValue: null,
  });

  const onClickNumber = (num) => {
    // if (
    //   (clickCell.rowIndex == null &&
    //     clickCell.colIndex == null &&
    //     clickCell.cellValue !== 0) ||
    //   (clickCell.rowIndex == null &&
    //     clickCell.colIndex == null &&
    //     clickCell.cellValue == null)
    // )
    //   return;
    clickCell.cellValue = num;
    sudokuTableData[clickCell.rowIndex][clickCell.colIndex] =
      clickCell.cellValue;
    forceUpdate();
  };
  const onSelectCell = (rowIdx, colIdx, value) => {
    setClickCell({ rowIndex: rowIdx, colIndex: colIdx, cellValue: value });
  };

  return (
    <div className="innercontainer">
      <GameTable
        sudokuTableData={sudokuTableData}
        onSelectCell={(row, col, value) => onSelectCell(row, col, value)}
      />
      <StatusSection onClickNumber={(number) => onClickNumber(number)} />
    </div>
  );
}

export default GameSection;
