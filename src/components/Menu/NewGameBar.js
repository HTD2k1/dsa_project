import React from 'react';

function NewGame(props) {

    const handleEasy = () =>{

    }

    const handleMedium = () =>{
        
    }

    const handleHard = () =>{
        
    }

    const handleExpert = () =>{
        
    }

    return (
        <div className = "newGameBar">
            <h1 className = "header">Choose game's mode</h1>
            <button className = "easy" onClick ={handleEasy}>Easy</button>
            <button className = "medium" onClick ={handleMedium}>Medium</button>
            <button className = "hard" onClick ={handleHard}>Hard</button>
            <button className = "expert" onClick ={handleExpert}>Expert</button>
        </div>
    );
}

export default NewGame;