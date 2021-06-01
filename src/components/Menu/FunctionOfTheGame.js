import React from 'react';

function PrintFunctionOfTheGame(props) {

    const handleUndo = () =>{
        
    }

    const handleRedo = () =>{
        
    }

    const handleEdit = () =>{
        
    }

    const handleHint = () =>{
        
    }


    return (
        <div>
            <button className = "undo" onClick = {handleUndo}>Undo</button>
            <button className = "redo" onClick = {handleRedo}>Redo</button>
            <button className = "edit" onClick ={handleEdit}>Edit</button>
            <button className = "hint" onClick ={handleHint}>Hint</button>
        </div>
    );
}

export default PrintFunctionOfTheGame;