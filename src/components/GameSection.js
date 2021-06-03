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
  /**
   * @summary Handle UNDO functionality
   * @param {Array} stacks: stack[0] = undoCellStack, stack[1] = redoCellStack, stack[2] = sudokuTableData 
   * @author Tien Dat
   */
  const handleUndo = (stacks) =>{
    //Update state
    setUndoCellStack(stacks[0])
    setRedoCellStack(stacks[1])
    setSudokuTableData(stacks[2])

  }
 /**
   * @summary Handle REDO functionality
   * @param {Array} stacks: stack[0] = undoCellStack, stack[1] = redoCellStack, stack[2] = sudokuTableData 
   * @author Tien Dat
   */
  const handleRedo = (stacks) =>{
    //Update state
    setUndoCellStack(stacks[0])
    setRedoCellStack(stacks[1])
    setSudokuTableData(stacks[2])

  }
  
  /**
   * @summary Change Game mode
   * @param {Array} table 
   * @author Tien Dat
   */
  const handleModeChange = (table) =>{
    setSudokuTableData(table)
  }

  return (
    <div className="innercontainer">
     
      <GameTable
        sudokuTableData={sudokuTableData}
        onSelectCell={(row, col, value) => onSelectCell(row, col, value)}
      />
      <StatusSection
        //Data
        sudokuTableData={sudokuTableData}
        undoCellStack={undoCellStack}
        redoCellStack={redoCellStack}
        //Game FUNCTIONALITY handling
        onClickNumber={(number) => onClickNumber(number)}
        onSolveSudoku={handleSolve}
        onUndo ={handleUndo}
        onRedo ={handleRedo}
        //Game mode handling
        onModeChange ={handleModeChange}
      />
  
     
    </div>
  );
}

export default GameSection;
