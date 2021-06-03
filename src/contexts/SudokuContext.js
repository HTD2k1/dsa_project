import React, { createContext, useState } from 'react';
import GameTable from '../components/Game/GameTable';
import StatusSection from '../components/Status/StatusSection';

export const SudokuContext = createContext()

const SudokuContextProvider = ({children}) =>{

//State 
const [sudokuTable, setSudokuTable] = useState([[1  ,0,0,0,0,0,0, 0, 7 ],
    [0,0,0,0, 8 , 3 , 5 ,  6 ,0],
    [0,0,8  ,6  ,0,7  ,0,0, 0],
    [ 8 ,0,0,4  ,0,0,1  ,7  ,0 ],
    [4,0,5,0,0,0,2,0,6],
    [0,0,6,0,3,0,0,0,0],
    [0,8,4,2,0,6,9,1,5],
    [0,2,1,0,5,0,0,0,0],
    [0,7,9,3,1,4,6,0,8],
    ]);
console.log("SudoluContext Children", {children})
//Context data 
const sudokuTbContextData ={
    sudokuTable
    
} 


//Return provider

    return(
        <SudokuContext.Provider value={sudokuTbContextData}>
            {children}
            
        </SudokuContext.Provider>
    );

}

export default SudokuContextProvider