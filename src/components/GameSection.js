import React from "react";
import GameTable from "./Game/GameTable";
import Keypad from "./Keypad/Keypad";

import "./GameSection.css";
import StatusSection from "./Status/StatusSection";
import { SUDOKU_DATA } from "../config/constants/gameData";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function GameSection(props) {
  const forceUpdate = useForceUpdate();

  // Table data
  const [sudokuTableData, setSudokuTableData] = React.useState(SUDOKU_DATA);

  const [clickCell, setClickCell] = React.useState({
    rowIndex: null,
    colIndex: null,
    cellValue: null,  
  });

  const [undoCellStack, setUndoCellStack] = React.useState([]);
  const [redoCellStack, setRedoCellStack] = React.useState([]);

  /**
   * @summary Input the number user selects for the current selected cell
   * @param {*} num
   */
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

    // Change value using temporary variables
    let curCell = {...clickCell} //Cannot use below method as it creates pointer to the same object
    let newCell = Object.assign(clickCell);
    newCell.cellValue = num;

    let newSudokuTableData = [].concat(sudokuTableData);

    newSudokuTableData[newCell.rowIndex][newCell.colIndex] = newCell.cellValue;

    // Update new state
    setUndoCellStack(prevStack => [...prevStack,curCell])
    setRedoCellStack([]); //compulsory

    setClickCell(newCell);
    setSudokuTableData(newSudokuTableData);
  };

  /**
   * @summary Store current cell that user selects
   * @param {*} rowIdx
   * @param {*} colIdx
   * @param {*} value
   */
  const onSelectCell = (rowIdx, colIdx, value) => {
    setClickCell({ rowIndex: rowIdx, colIndex: colIdx, cellValue: value });
  };


  /**
   * @summary Handle SOLVE functionality
   * @param {Array} solvedTable 
   * @author Tien Dat
   */
  const handleSolve =(solvedTable) =>{
    switch(solvedTable){
      case false:
        alert("The puzzle is unsolvable")
        break;
      case undefined:
        alert("Cannot receive input sudoku table")
        break;
      default:
        setSudokuTableData(solvedTable)
    }
  }
  }

  return (
    <div className="innercontainer">
     
      <GameTable
        sudokuTableData={sudokuTableData}
        onSelectCell={(row, col, value) => onSelectCell(row, col, value)}
      />
      <StatusSection
        onClickNumber={(number) => onClickNumber(number)}
        sudokuTableData={sudokuTableData}
        onSolveSudoku={handleSolve}
      />
  
     
    </div>
  );
}

export default GameSection;
