const test1 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 0, 0, 8, 3, 5, 6, 0],
  [0, 0, 8, 6, 0, 7, 0, 0, 0],
  [8, 0, 0, 4, 0, 0, 1, 7, 0],
  [4, 0, 5, 0, 0, 0, 2, 0, 6],
  [0, 0, 6, 0, 3, 0, 0, 0, 0],
  [0, 8, 4, 2, 0, 6, 9, 1, 5],
  [0, 2, 1, 0, 5, 0, 0, 0, 0],
  [0, 7, 9, 3, 1, 4, 6, 0, 8],
];

const test = [
  [1, 6, 3, 5, 2, 9, 8, 4, 7],
  [9, 4, 7, 1, 8, 3, 5, 6, 2],
  [2, 5, 8, 6, 4, 7, 3, 9, 1],
  [8, 9, 2, 4, 6, 5, 1, 7, 3],
  [4, 3, 5, 7, 9, 1, 2, 8, 6],
  [7, 1, 6, 8, 3, 2, 4, 5, 9],
  [3, 8, 4, 2, 7, 6, 9, 1, 5],
  [6, 2, 1, 9, 5, 8, 7, 3, 4],
  [5, 7, 9, 3, 1, 4, 6, 0, 0],
];

const result = [
  [1, 6, 3, 5, 2, 9, 8, 4, 7],
  [9, 4, 7, 1, 8, 3, 5, 6, 2],
  [2, 5, 8, 6, 4, 7, 3, 9, 1],
  [8, 9, 2, 4, 6, 5, 1, 7, 3],
  [4, 3, 5, 7, 9, 1, 2, 8, 6],
  [7, 1, 6, 8, 3, 2, 4, 5, 9],
  [3, 8, 4, 2, 7, 6, 9, 1, 5],
  [6, 2, 1, 9, 5, 8, 7, 3, 4],
  [5, 7, 9, 3, 1, 4, 6, 2, 8],
];
export const callSudokuSolver = (inputHookBoard) => {
  console.log("callSudokuSolver"); // Rendering signals

  //Stop executing if cannot receive any input
  if (inputHookBoard === undefined) {
    return undefined;
  }

  return solve(inputHookBoard);
};

//Validate input: Not really good solution

const isInputValid = (board, number, row, col) => {
  return (
    checkRow(board, number, row) &&
    checkColumn(board, number, col) &&
    checkSubGrid(board, number, row, col)
  );
};

//Check if number has already existed in current row
const checkRow = (board, number, row) => {
  return board[row].includes(number) ? false : true;
};

//Check if number has already existed in current column
const checkColumn = (board, number, col) => {
  for (const row of board) {
    if (row[col] === number) return false;
  }
  return true;
};

//Check if number has already existed in current 3x3 region
const checkSubGrid = (board, number, row, col) => {
  const gridRow = parseInt(row / 3) * 3;
  const gridCol = parseInt(col / 3) * 3;

  for (var i = gridRow; i < gridRow + 3; i++) {
    for (var j = gridCol; j < gridCol + 3; j++) {
      if (board[i][j] === number) return false;
    }
  }

  return true;
};

const isFull = (board) => {
  for (var i = 0; i < 9; i++)
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
    }

  return true;
};

const solve = (board) => {
  if (isFull(board)) return board;
  else {
    const possibleBoards = validateBoards(board);
    return backTrackingSearch(possibleBoards);
  }
};

const backTrackingSearch = (boards) => {
  if (boards.length < 1) {
    return false;
  } else {
    const board = boards.shift();
    const solvable = solve(board);
    if (solvable !== false) return solvable;
    else return backTrackingSearch(boards);
  }
};

const validateBoards = (board) => {
  var result = [];
  //Search for possibilities
  const firstEmpty = findEmptyCell(board);
  const empty_i = firstEmpty[0];
  const empty_j = firstEmpty[1];
  //Create possible boards

  if (firstEmpty !== undefined) {
    for (var num = 1; num < 10; num++)
      if (isInputValid(board, num, empty_i, empty_j)) {
        // Check if board is valid
        const newBoard = [...board];
        const newRow = [...board[empty_i]]; // Each element of 2d array is not DEEP COPIED, hence need another spread operator
        newRow[empty_j] = num;
        newBoard[empty_i] = newRow;
        result.push(newBoard);
      }
  }

  return result;
};

const findEmptyCell = (board) => {
  for (var i = 0; i < board.length; i++)
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  return undefined;
};
