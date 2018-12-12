import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';

function DefendGrid() {

  const gridSquares = Array(100).fill(0)
  return (
    <div className="grid-container-small">
      <style jsx>{`
        .grid-container-small {
          display: grid;
          grid-template-columns: repeat(10, 2rem);
          grid-template-rows: repeat(10, 2rem);
        }
        .square-small {
          background-color: saddlebrown;
          color: wheat;
          text-shadow: 0 2px 1px white;
          border: 1px solid aquamarine;
          border-radius: .25rem;
          padding: .25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      {gridSquares.map((square, index) =>
          <div key={index} className="square-small">{square}</div>
        )}
    </div>
  )

}

export default DefendGrid;
