import React from "react";

function PrintFunctionOfTheGame(props) {
  const handleUndo = () => {
    let col = undoStack.pop();
    let row = undoStack.pop();
    let value = undoStack.pop();
    if (undoStack.length == 0) alert("Can not undo");
    else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i == row && j == col) {
            redoStack.push(arr[i][j]);
            redoStack.push(row);
            redoStack.push(col);
            arr[i][j] = value;
          }
        }
      }
    }
  };

  const handleRedo = () => {
    let col = redoStack.pop();
    let row = redoStack.pop();
    let value = redoStack.pop();
    if (redoStack.length == 0) alert("Can not redo");
    else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i == row && j == col) {
            undoStack.push(arr[i][j]);
            undoStack.push(row);
            undoStack.push(col);
            arr[i][j] = value;
          }
        }
      }
    }
  };

  const handleEdit = () => {};

  const handleSolve = () => {};

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
      <button className="hint" onClick={handleSolve}>
        Solve
      </button>
    </div>
  );
}

export default PrintFunctionOfTheGame;
