import React from "react";

import "./Phong.css";

function Phong(props) {

  const [clickNewGame, setClickNewGame] = React.useState(false) // false = haven't clicked new game button
  // clickNewGame = false
  // setClickNewGame = function used to update state of clickNewGame

  const handleNewGame = () => {
    setClickNewGame(true)
  }

  return (
    <div className="menu-container">
      <button onClick={handleNewGame}>Game</button>
      <button>Undo</button>
      <button>Erase</button>
      <button>Edit</button>
      {clickNewGame == true ? null : <button>Hint</button>}
    </div>
  );
}

export default Phong;
