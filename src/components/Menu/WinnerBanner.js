import React from 'react';
import "./WinnerBanner.css";

function WinnerBanner(props) {
    return (
        <div className ='banner'>
           <div className ='congra-and-pic'>
           <text>Congratulation!!!</text>
            {/* <img className='img-firework' src="images/firework3.png" alt=""/> */}
           </div>
            <p>You've won the game.</p>
        </div>
    );
}

export default WinnerBanner;