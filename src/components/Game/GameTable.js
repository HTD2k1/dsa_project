import React, { useState, useEffect } from "react";
import { createSetOfUnchangeableCells } from "../SudokuGenerator";
import { isInputValid } from "../SudokuSolver";
import "./GameTable.css";

function GameTable(props) {
  console.log("GameTable_rendering")
  //State
  const [unchangeableSet, setUnchangeableSet] = useState(null);
  const [invalidSet, setInvalidSet] = useState(null);
  const clickValue = props.clickCell.cellValue
  useEffect(() => {
    const newSet = createSetOfUnchangeableCells(props.orgPuzzle);
    setUnchangeableSet(newSet);
    console.log("Inside useEffect_unchangeableSet", newSet);
  }, [props.orgPuzzle]);

  useEffect(() => {
    const tmpSet = createInValidSet(props.sudokuTableData);
    console.log("Inside useEffect_invalidSet", tmpSet);
    setInvalidSet(tmpSet);
  }, [props.sudokuTableData]);


  //Input handling 
  useEffect(() => {
    window.addEventListener('keypress', e => {
      console.log("clickCell",props.clickCell)
      const input = e.key
      if(input <= 9 && input >= 1 && input !== clickValue)
      console.log(e.key)
    });
  }, []);

  const createInValidSet = (board) => {
    const newSet = new Set();
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) continue;
        if (isInputValid(board, board[i][j], i, j)) continue;
        else {
          newSet.add(i + "," + j);
        }
      }
    }
    return newSet;
  };

  /**
   * @summary
   * @param {number} rowId
   * @param {number} colId
   * @returns {boolean}
   */
  const isCellSelected = (rowId, colId) => {
    const { rowIndex, colIndex } = props.clickCell;
    if (rowIndex === null && colIndex === null) return false;
    else if (rowId === rowIndex && colId === colIndex) return true;
    else return false;
  };

  //Style
  const styleContainer = {
    selected: { backgroundColor: "hsl(34, 26%, 89%)" },
    invalid: {
      backgroundColor: "hsl(7, 63%, 67%)",
      color: "hsl(210, 88%, 56%)",
    },
    unchangeable: { color: "black" },
    unchangeablyInvalid: {
      backgroundColor: "hsl(7, 63%, 67%)",
      color: "black",
    },
  };

  return (
    <div className="game">
      <table className="game__board">
        <tbody>
          {props.sudokuTableData &&
            props.sudokuTableData.map((suRow, suRowIndex) => {
              return (
                <tr key={100000 + suRowIndex}>
                  {suRow.map((suValue, suColIndex) => {
                    // Style condition
                    const isInvalid =
                      invalidSet &&
                      invalidSet.has(suRowIndex + "," + suColIndex);

                    //Styling input cell
                    let normalCell = isInvalid ? styleContainer.invalid : null;
                    normalCell = isCellSelected(suRowIndex, suColIndex)
                      ? styleContainer.selected
                      : normalCell;
                    //Styling unchangeable cell
                    const unchangeableCell = isInvalid
                      ? styleContainer.unchangeablyInvalid
                      : styleContainer.unchangeable;

                    if (
                      unchangeableSet &&
                      !unchangeableSet.has(suRowIndex + "," + suColIndex)
                    )
                      // checking if <td> is changeable
                      return (
                        //Input <td>
                        <td
                          style={normalCell}
                          key={suRowIndex * 10 + suColIndex}
                          onClick={() =>
                            props.onSelectCell(suRowIndex, suColIndex, suValue)
                          }
                          onKeyDown={(e) => console.log(e.key)}

                          className={`game__cell game__cell--filled`}
                        >
                          {suValue !== 0 ? suValue : null}
                        </td>
                      );
                    //Unchangeable <td>
                    else
                      return (
                        <td
                          style={unchangeableCell}
                          key={suRowIndex * 10 + suColIndex}
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
