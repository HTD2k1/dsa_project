import React from "react";
import {
  SUDOKU_DATA,
  MEDIUM_SUDOKU,
  HARD_SUDOKU,
  EXPERT_SUDOKU,
} from "../../config/constants/gameData";
function NewGameBar(props) {
  const changeMode = (mode) => {
    switch (mode) {
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
    }
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD

    const handleHard = () =>{
        
    }

    const handleExpert = () =>{
        
    }

    return (
        <div className = "newGameBar">
            <p className = "header">Choose game's mode</p>
            <button className = "easy" onClick ={handleEasy}>Easy</button>
            <button className = "medium" onClick ={handleMedium}>Medium</button>
            <button className = "hard" onClick ={handleHard}>Hard</button>
            <button className = "expert" onClick ={handleExpert}>Expert</button>
        </div>
    );
=======
=======
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
=======
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes
}

export default NewGameBar;
