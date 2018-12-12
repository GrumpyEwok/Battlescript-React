import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';


function AttackGrid() {

const gridSquares = Array(100).fill(0);
console.log(gridSquares);

  return (
    <div className="grid-container">
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(10, 3rem);
          grid-template-rows: repeat(10, 3rem);
        }
        .square {
          background-color: aquamarine;
          color: aqua;
          text-shadow: 0 2px 1px black;
          border: 1px solid saddlebrown;
          border-radius: .25rem;
          padding: .25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    {gridSquares.map((square, index) =>
        <div key={index} className="square">{square}</div>
      )}
    </div>
  )
};

export default AttackGrid;
