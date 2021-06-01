import React from 'react';

function PrintFunctionOfTheGame(props) {

    const handleUndo = () =>{
        
    }

    const handleRedo = () =>{
        
    }

    return (
        <div>
            <button className = "undo" onClick = {handleUndo}>Undo</button>
            <button className = "redo" onClick = {handleRedo}>Redo</button>
            <button className = "edit">Edit</button>
            <button className = "hint">Hint</button>
        </div>
    );
}

export default PrintFunctionOfTheGame;