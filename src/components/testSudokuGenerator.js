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
function removeKDigits(count)
{
    while (count != 0)
    {
        let cellId = Math.floor(Math.random()*80+1);

        // System.out.println(cellId);
        // extract coordinates i  and j
        let i = parseInt(cellId/9);
        let j = parseInt(cellId%9);
        console.log(i+ ", "+j)
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
removeKDigits(10);
console.log(board);