import React,{useState, useContext} from "react";
import { SUDOKU_DATA } from "../../config/constants/gameData";
import {SudokuContext} from "../../contexts/SudokuContext"

import "./GameTable.css";

function GameTable(props) {
  
  
  const [clickCell, setClickCell] = React.useState({
    rowIndex: null,
    colIndex: null,
  });

  /**
   * @summary Highlight cell when user clicks a cell
   * @param
   * @author Ken Pham
   */
  const onSelectCell = (rowIdx, colIdx, value) => {
    let newClickCell = Object.assign(clickCell);
    newClickCell.rowIndex = rowIdx;
    newClickCell.colIndex = colIdx;
    setClickCell(newClickCell);
  };
  const onFillCell = (rowIdx, colIdx) => {};

  const selectedCell = (cell) => {
    return <td className={`game__cell game__cell--selected`}>{cell}</td>;
  };
  const filledCell = (cell) => {
    return <td className={`game__cell game__cell--filled`}>{cell}</td>;
  };
  const handleCellState = (state, row, col) => {
    let cellValue = props.sudokuTableData[row][col];
    switch (state) {
      case "SELECT":
        return selectedCell(cellValue);
      case "FILL":
        return filledCell(cellValue);
    }
  };

  return (
    <div className="game">
      <table className="game__board">
        <tbody>
          {props.sudokuTableData && props.sudokuTableData.map((suRow, suRowIndex) => {
            return (
              <tr>
                {suRow.map((suCol, suColIndex) => {
                  return (
                    <td
                      onClick={() => props.onSelectCell(suRowIndex, suColIndex, suCol)}
                      className={`game__cell game__cell--filled`}
                    >
                      {suCol !== 0 ? suCol : null}
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
