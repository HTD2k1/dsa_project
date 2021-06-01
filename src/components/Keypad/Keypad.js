import React from "react";
import "./Keypad.css";

function Keypad(props) {
  return (
    <div className="status__numbers">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        return (
          <div
            className="status__number"
            key={number}
            onClick={() => props.onClickNumber(number)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default Keypad;
