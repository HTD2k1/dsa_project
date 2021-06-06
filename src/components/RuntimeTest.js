
const test1 = [
    [1, 0, 0, 0, 0, 0, 0, 0, 7],
    [0, 0, 0, 0, 8, 3, 5, 6, 0],
    [0, 0, 8, 6, 0, 7, 0, 0, 0],
    [8, 0, 0, 4, 0, 0, 1, 7, 0],
    [4, 0, 5, 0, 0, 0, 2, 0, 6],
    [0, 0, 6, 0, 3, 0, 0, 0, 0],
    [0, 8, 4, 2, 0, 6, 9, 1, 5],
    [0, 2, 1, 0, 5, 0, 0, 0, 4],
    [0, 7, 9, 3, 1, 4, 6, 0, 0],
  ];
  
  const fullAnswer = [
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

//random fron 1-9
function random(){
  return Math.floor(Math.random()*9 + 1);
}
//create sudoku board
var board = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0],
          ];
/*for(let i = 0; i < 9; i++){
  board[i] = 0;
  for(let j = 0; j < 9; j++){
      board[i][j] = 0;
  }
}*/

function fillDiagonal(){
  for(let i = 0; i < 9; i = (i + 3)){
      fillBox(i, i);
  }
}
//checkBox
function checkBox(row, col, num){
  for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
          if (board[row+i][col+j] == num) return false;
  return true;
}

//fill 3x3
function fillBox(row, col){
  let num;
  for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
          do{
              num = random();
          }while(!checkBox(row, col, num));
          board[row+i][col+j] = num;
      }
  }
}
//check valid
function check(i, j, num){
  return (checkCol(j, num) && 
          checkRow(i, num) && 
          checkBox(i - (i%3), j - (j%3), num));
}
//check row
function checkRow(i, num){
  for(let j = 0; j < 9; j++){
      if (board[i][j] == num) return false;
  }
  return true;
}
//check column
function checkCol(j, num){
  for (let i = 0; i < 9; i++){
      if (board[i][j] == num) return false;
  }
  return true;
}
//fill the remaining
function fillRemaining(i, j){
//    console.log(i);
//    console.log(j);
  if (j>=9 && i<8)
  {
      i = i + 1;
      j = 0;
  }
  if (i>=9 && j>=9)
      return true;

  if (i < 3)
  {
      if (j < 3)
          j = 3;
  }
  else if (i < 6)
  {
      if (j==3){
          j =  j + 3;
      }
          
  }
  else
  {
      if (j == 6)
      {
          i = i + 1;
          j = 0;
          if (i>=9)
              return true;
      }
  }

  for (let num = 1; num <= 9; num++)
  {
      if (check(i, j, num))
      {
          board[i][j] = num;
          if (fillRemaining(i, j+1))
              return true;

          board[i][j] = [];
      }
  }
  return false;
}

//remove degits
function removeKDigits()
{
  var count = 10;
  while (count != 0)
  {
      let cellId = Math.floor(Math.random()*81+1);

      // System.out.println(cellId);
      // extract coordinates i  and j
      let i = parseInt(cellId/9);
      let j = (cellId%9);
      if (j != 0)
          j = j - 1;

      if (board[i][j] != 0)
      {
          count--;
          board[i][j] = 0;
      }
  }
}
fillDiagonal();
fillRemaining(0, 3);
removeKDigits();
console.log(board);


const checkInputbySet = (board) =>{
    
    if(board === undefined) return undefined

    const mySet = new Set()
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < 9; j++)
        if(board[i][j] !== 0){
            mySet.add("r"+i+":"+board[i][j])
            mySet.add("c"+j+":"+board[i][j])
            mySet.add("g"+parseInt(i/3)+","+parseInt(j/3)+":"+board[i][j])
        } 
    }
    return mySet
    
  }

//Validate input: Not really good solution

// const isInputValid = (board, number, row, col) => {
//     if (number === 0) return false
//     return (
//       checkRow(board, number, row) &&
//       checkColumn(board, number, col) &&
//       checkSubGrid(board, number, row, col)
//     );
//   };
  
//   //Check if number has already existed in current row
//   const checkRow = (board, number, row) => {
//     return board[row].includes(number) ? false : true;
//   };
  
//   //Check if number has already existed in current column
//   const checkColumn = (board, number, col) => {
//     for (const row of board) {
//       if (row[col] === number) return false;
//     }
//     return true;
//   };
  
//   //Check if number has already existed in current 3x3 region
//   const checkSubGrid = (board, number, row, col) => {
//     const gridRow = parseInt(row / 3) * 3;
//     const gridCol = parseInt(col / 3) * 3;
  
//     for (var i = gridRow; i < gridRow + 3; i++) {
//       for (var j = gridCol; j < gridCol + 3; j++) {
//         if (board[i][j] === number) return false;
//       }
//     }
  
//     return true;
//   };

// const testSet = () =>{
//     var end, start
// const mySet = checkInputbySet(test1)
// const i = 5, j = 5, num = 1
// let row, col, grid
// start = new Date();
// for ( let ind =0; ind < 100000; ind++)
// {
//   row ="r"+i+":"+num
//   col ="c"+j+":"+num
//   grid="g"+parseInt(i/3)+","+parseInt(j/3)+":"+num
//   mySet.has(row)
//   mySet.has(col)
//   mySet.has(grid)
// }

// end = new Date();

// console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

// }

// const testArr = () =>{
//     var end, start

// start = new Date();
// for ( let i =0; i < 100000; i++)
// {
//   isInputValid(test1,1,5,5)
// }

// end = new Date();

// console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');

// }

// // test(test1, checkInputbySet)
// console.log("Set checking test:")
// testSet()
// console.log("Array checking test:")
// testArr()
