import React, {useState} from 'react';
import "./SudokuTable.css"


const SudokuTable = (props) => {
    
    const [sudoku, setSudoku] = useState(props.numbers);

 

    console.log("table: ",sudoku)
    console.log("Testing sudoku checking ", isInputValid(8, 0, 1))
    return(
        <>
        <table id="main-sudoku-table">
            <tbody>
            {sudoku.map((row) =>
            {
                return(
                    <tr>
                        {row.map((el,el_indx) =>{
                            return(
                                <td >
                                {(el === '.') ? null : el}
                               </td>
                            )
                            
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
     
        </>
    );
}





export default SudokuTable;