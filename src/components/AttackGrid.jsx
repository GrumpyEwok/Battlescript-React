import React from 'react';
import PropTypes from 'prop-types';

function AttackGrid() {

const gridSquares = Array(100).fill(0)

  return (
    <div className="grid-container">
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(10, 3%);
          grid-template-rows: repeat(10, 3%);
        }
        .square {
          background-color: aquamarine;
          color: aqua;
          text-shadow: 0 2px 1px black;
        }
      `}</style>
      gridSquares.map((square) =>{
        return <div className="square">{square.value}</div>
      })
    </div>
  )

};

export default AttackGrid;
