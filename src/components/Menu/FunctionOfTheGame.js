import React from "react";

function PrintFunctionOfTheGame(props) {
  // Define prop
  const sudokuTableData = props.sudokuTableData;

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

  const handleEdit = () => {};

  const handleSolve = () => {
    const solution = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 4, 7, 1, 8, 3, 5, 6, 2],
      [2, 5, 8, 6, 4, 7, 3, 9, 1],
      [8, 9, 2, 4, 6, 5, 1, 7, 3],
      [4, 3, 5, 7, 9, 1, 2, 8, 6],
      [7, 1, 6, 8, 3, 2, 4, 5, 9],
      [3, 8, 4, 2, 7, 6, 9, 1, 5],
      [6, 2, 1, 9, 5, 8, 7, 3, 4],
      [5, 7, 9, 3, 1, 4, 6, 0, 0]
      ]
    return solution
  };

  return (
    <div>
      <button className="undo" onClick={handleUndo}>
        Undo
      </button>
      <button className="redo" onClick={handleRedo}>
        Redo
      </button>
      <button className="edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="hint" 
      onClick={e => props.onHandleSolve(e)}
      >
        Solve
      </button>
    </div>
  );
}

export default PrintFunctionOfTheGame;
