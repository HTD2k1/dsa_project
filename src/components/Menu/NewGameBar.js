import React from 'react';

function NewGame(props) {
    return (
        <div className = "newGameBar">
            <h1 className = "header">Choose game's mode</h1>
            <button className = "easy">Easy</button>
            <button className = "medium">Medium</button>
            <button className = "hard">Hard</button>
            <button className = "expert">Expert</button>
        </div>
    );
}

export default NewGame;