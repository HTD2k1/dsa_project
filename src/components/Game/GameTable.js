import React, { useState } from "react";

import "./GameTable.css";

function GameTable(props) {
  // const [clickCell, setClickCell] = React.useState({
  //   rowIndex: null,
  //   colIndex: null,
  // });  UNECCESSARY 

  /**
   * @summary 
   * @param {number} rowId
   * @param {number} colId 
   * @returns {boolean}
   */
  const isCellSelected = (rowId, colId) =>{
    const {rowIndex, colIndex} = props.clickCell
    if(rowIndex === null && colIndex === null) return false
    else if(rowId === rowIndex && colId === colIndex) return true
    else return false

  } 

  return (
    <div className="game">
      <table className="game__board">
        <tbody>
          {props.sudokuTableData &&
            props.sudokuTableData.map((suRow, suRowIndex) => {
              return (
                <tr key={100000 + suRowIndex}>
                  {suRow.map((suValue, suColIndex) => {
                    
                    const selectedStyle = (isCellSelected(suRowIndex,suColIndex)) ? {backgroundColor: "hsl(34, 26%, 89%)"} : null;
                    // const selectedStyle ={backgroundColor: "red"}
                    return (
                      <td
                        style ={selectedStyle}
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
