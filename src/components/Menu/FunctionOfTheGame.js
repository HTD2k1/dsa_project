import React, { useState } from "react";
import { callSudokuSolver } from "../SudokuSolver";

function PrintFunctionOfTheGame(props) {
<<<<<<< Updated upstream
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

=======
<<<<<<< HEAD
<<<<<<< HEAD

  // TODO:
  const handleUndo = () => {
    // let col = undoStack.pop();
    // let row = undoStack.pop();
    // let value = undoStack.pop();
    // if (undoStack.length == 0) alert("Can not undo");
    // else {
    //   for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //       if (i == row && j == col) {
    //         redoStack.push(arr[i][j]);
    //         redoStack.push(row);
    //         redoStack.push(col);
    //         arr[i][j] = value;
    //       }
    //     }
    //   }
    // }
    
  };

  const handleRedo = () => {
    // let col = redoStack.pop();
    // let row = redoStack.pop();
    // let value = redoStack.pop();
    // if (redoStack.length == 0) alert("Can not redo");
    // else {
    //   for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //       if (i == row && j == col) {
    //         undoStack.push(arr[i][j]);
    //         undoStack.push(row);
    //         undoStack.push(col);
    //         arr[i][j] = value;
    //       }
    //     }
    //   }
    // }
  };  
=======
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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

=======
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
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53

=======
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

>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <button className="solve" onClick={handleSolve}>
=======
=======
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes
      <button
        className="hint"
        onClick={() => props.onSolveSudoku(getSolution())}
      >
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
=======
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes
        Solve
      </button>
    </div>
  );
}

export default PrintFunctionOfTheGame;
