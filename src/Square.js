import { useState } from "react";
function Square(props) {
    
    return (
      <button
        className="square"
        onClick={props.onSquareClick}
      >
        {props.value}
      </button>
    );
  }

export default Square;