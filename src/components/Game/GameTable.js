import React from "react";
import { SUDOKU_DATA } from "../../config/constants/gameData";

import "./GameTable.css";

function GameTable(props) {
  const [sudokuTableData, setSudokuTableData] = React.useState(SUDOKU_DATA);
  const [clickCell, setClickCell] = React.useState({
    rowIndex: null,
    colIndex: null,
  });

  /**
   * @summary Highlight cell when user clicks a cell
   * @param
   * @author Ken Pham
   */
  const onSelectCell = (rowIdx, colIdx) => {
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
    let cellValue = sudokuTableData[row][col];
    switch (state) {
      case "SELECT":
        return selectedCell(cellValue);
      case "FILL":
        return filledCell(cellValue);
    }
  };

  return (
    <div>
      <section className="game">
        <table className="game__board">
          <tbody>
            {sudokuTableData.map((suRow, suRowIndex) => {
              return (
                <tr>
                  {suRow.map((suCol, suColIndex) => {
                    
                    return (
                      <td
                        onClick={() => onSelectCell(suRowIndex, suColIndex)}
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
      </section>
    </div>
  );
}

export default GameTable;
