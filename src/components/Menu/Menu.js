import React from "react";
import PrintFunctionOfTheGame from "./FunctionOfTheGame";
import "./Menu.css";
import NewGameBar from "./NewGameBar";

function MenuBar(props) {
<<<<<<< Updated upstream
  const sudokuTableData = props.sudokuTableData;
  const [isModeChange, setIsModeChange] = React.useState(false);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    const [state,setState] = React.useState(false);
=======
  const sudokuTableData = props.sudokuTableData;
  const [isModeChange, setIsModeChange] = React.useState(false);
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
=======
  const sudokuTableData = props.sudokuTableData;
  const [isModeChange, setIsModeChange] = React.useState(false);
>>>>>>> b3d70272fd5be30f30547f7b7040092534edac53
>>>>>>> Stashed changes

  const handleModeChange = () => {
    setIsModeChange((state) => !state);
  };

  return (
    <div className="menuGame">
      <button className="newGame" onClick={handleModeChange}>
        New game
      </button>
      {isModeChange === true ? (
        <NewGameBar onModeChange={(table) => props.onModeChange(table)} />
      ) : (
        <PrintFunctionOfTheGame
          //Data
          sudokuTableData={sudokuTableData}
          redoCellStack={props.redoCellStack}
          undoCellStack={props.undoCellStack}
          //Handling
          onSolveSudoku={(sovledTable) => props.onSolveSudoku(sovledTable)}
          onUndo={(stacks) => props.onUndo(stacks)}
          onRedo={(stacks) => props.onRedo(stacks)}
        />
      )}
    </div>
  );
}

export default MenuBar;
