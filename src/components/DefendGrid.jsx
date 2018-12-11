import React from 'react';
import PropTypes from 'prop-types';

function DefendGrid() {

  const gridSquares = Array(100).fill(0)

  return (
    <div className="grid-container-small">
      <style jsx>{`
        .grid-container-small {
          display: grid;
          grid-template-columns: repeat(10, 1%);
          grid-template-rows: repeat(10, 1%);
        }
        .square {
          background-color: saddlebrown;
          color: wheat;
          text-shadow: 0 2px 1px white;
        }
      `}</style>
      gridSquares.map((square) =>{
        return <div className="square">{square.value}</div>
      })
    </div>
  )

}

export default DefendGrid;
