import React from 'react';
import PrintFunctionOfTheGame from './FunctionOfTheGame';
import './Menu.css';
import NewGameBar from './NewGameBar';

function MenuBar(props) {
    const sudokuTableData = props.sudokuTableData;
    const [state,setState] = React.useState(false);

    const handleState = ()=>{
        // {state == false ? setState(true) : setState(false)};
        setState(state => !state);        
    }

    return (
        <div className="menuGame">
            <button className = "newGame" onClick = {handleState}>New game</button>
            {state == true ? <NewGameBar/> : <PrintFunctionOfTheGame/>}
        </div>
    );
}

export default MenuBar;
