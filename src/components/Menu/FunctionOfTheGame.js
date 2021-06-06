import React, { useState } from "react";
import { callSudokuSolver } from "../SudokuSolver";

function PrintFunctionOfTheGame(props) {
  // Define prop
  let sudokuTableData = JSON.parse(JSON.stringify(props.sudokuTableData)); // DEEP COPY 2d array
  let undoCellStack = props.undoCellStack;
  let redoCellStack = props.redoCellStack;

  /**
   * @summary Call SudokuSolver to get the solution
   * @returns {Array} 9x9 array
   * @author Tien Dat
   */
  const getSolution = () => {
    return callSudokuSolver(sudokuTableData);
  };

  /**
   * @summary Move value of top undoCellStack to current sudokuTable, move value of current sudokuTable to redoCellStack
   * @returns {Array} array of stacks and sudokuTable
   * @author Tien Dat
   */
  const changeUndo = () => {
    if (undoCellStack.length === 0) {
      alert("Can not undo");
    } else {
      //Pop top stack
      let tempStk = undoCellStack.pop();

      //Swap sudokuTable's current value with tempStk.cellValue
      let temp = tempStk.cellValue;
      tempStk.cellValue = sudokuTableData[tempStk.rowIndex][tempStk.colIndex];
      sudokuTableData[tempStk.rowIndex][tempStk.colIndex] = temp;

      //Push stack
      redoCellStack.push(tempStk);
    }
    //Return
    return [undoCellStack, redoCellStack, sudokuTableData];
  };

  /**
   * @summary Move value of top redoCellStack to current sudokuTable, move value of current sudokuTable to undoCellStack
   * @returns {Array} array of stacks and sudokuTable
   * @author Tien Dat
   */
  const changeRedo = () => {
    if (redoCellStack.length === 0) {
      alert("Can not redo");
    } else {
      //Handle Stacks
      const tempStk = redoCellStack.pop();
      const { rowIndex, colIndex, cellValue } = tempStk;
      undoCellStack.push({
        rowIndex: rowIndex,
        colIndex: colIndex,
        cellValue: sudokuTableData[rowIndex][colIndex],
      });

      //Handle sudokuTable
      sudokuTableData[rowIndex][colIndex] = cellValue;
    }
    return [undoCellStack, redoCellStack, sudokuTableData];
  };

  return (
    <div>
      <button className="undo" onClick={() => props.onUndo(changeUndo())}>
        Undo
      </button>
      <button className="redo" onClick={() => props.onRedo(changeRedo())}>
        Redo
      </button>
      <button
        className="solve"
        onClick={() => props.onSolveSudoku(getSolution())}
      >
        Solve
      </button>
    </div>
  );
}

export default PrintFunctionOfTheGame;
