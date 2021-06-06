import {generateSudoku} from "../SudokuGenerator";
import React from "react";
import {
  SUDOKU_DATA,
  MEDIUM_SUDOKU,
  HARD_SUDOKU,
  EXPERT_SUDOKU,
} from "../../config/constants/gameData";
function NewGameBar(props) {
  const changeMode = (mode) => {
    /*switch (mode) {
      case "EASY":
        return SUDOKU_DATA;

      case "MEDIUM":
        return MEDIUM_SUDOKU;

      case "HARD":
        return HARD_SUDOKU;

      case "EXPERT":
        return EXPERT_SUDOKU;
      default:
        break;
    }*/
    return generateSudoku(mode);
  };

  return (
    <div className="newGameBar">
      <h1 className="header">Choose game's mode</h1>
      <button
        className="easy"
        onClick={() => props.onModeChange(changeMode("EASY"))}
      >
        Easy
      </button>
      <button
        className="medium"
        onClick={() => props.onModeChange(changeMode("MEDIUM"))}
      >
        Medium
      </button>
      <button
        className="hard"
        onClick={() => props.onModeChange(changeMode("HARD"))}
      >
        Hard
      </button>
      <button
        className="expert"
        onClick={() => props.onModeChange(changeMode("EXPERT"))}
      >
        Expert
      </button>
    </div>
  );
}

export default NewGameBar;
