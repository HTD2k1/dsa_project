//Đợi e Quang :)))
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


export const createSetOfUnchangeableCells = (board) =>{
    
    if(board === undefined) return undefined

    const mySet = new Set()
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < 9; j++)
        if(board[i][j] !== 0) mySet.add(i+","+j)
    }
    return mySet
  }
 
  const mySet = createSetOfUnchangeableCells(test1)
  const i = 0, j = 1
  console.log(mySet)
  console.log(mySet.has(i+","+j))
  