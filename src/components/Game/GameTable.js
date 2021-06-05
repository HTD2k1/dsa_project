import React, { useState } from "react";

import "./GameTable.css";

function GameTable(props) {
  const [clickCell, setClickCell] = React.useState({
    rowIndex: null,
    colIndex: null,
  });

  return (
    <div className="game">
      <table className="game__board">
        <tbody>
          {props.sudokuTableData &&
            props.sudokuTableData.map((suRow, suRowIndex) => {
              return (
                <tr key={100000 + suRowIndex}>
                  {suRow.map((suValue, suColIndex) => {
                    
                    return (
                      <td
                        key={suRowIndex * 10 + suColIndex}
                        onClick={() =>
                          props.onSelectCell(suRowIndex, suColIndex, suValue)
                        }
                        className={`game__cell game__cell--filled`}
                      >
                        {suValue !== 0 ? suValue : null}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default GameTable;
