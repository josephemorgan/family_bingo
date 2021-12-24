import React from 'react';
import './App.css';


function Grid(props) {
  let grid = [];

  for (let i = 0; i < 5; ++i) {
    let row = [];
    row.push(<Square type="letter" value={"BINGO".slice(i, i + 1)} />);

    for (let j = 0; j < 15; ++j) {
      let squareValue = (15 * i) + (j + 1);
      row.push(
        <Square
          onClick={props.clickFunction}
          type={props.rolledNumbers.includes(squareValue) ? "chosen" : "notChosen"}
          value={squareValue}
        />
      );
    }
    grid.push(
      <div className="gridRow">
        {row}
      </div>
    );
  }

  return (
    <div className="Grid">
      {grid}
    </div>
  );
}

function Square(props) {
  return (
    <button id={"square-" + props.value} className={`square ${props.type}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default Grid;
