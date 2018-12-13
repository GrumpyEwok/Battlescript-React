import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AttackGrid(props) {

  const arrayObject = Object.assign({}, props.battlefield)
// const gridSquares = Array(100).fill(0);
// console.log(gridSquares);
  // console.log(props);
  console.log(props);

  return (
    <div>
      {Object.keys(arrayObject).forEach((battlefieldArray, index1) => {
        Object.keys(battlefieldArray).map((squareValue, index2) => {
          return <div key={index1 + index2}>{squareValue}</div>
        })
      })}
    </div>
  )
}

AttackGrid.propTypes = {
  battlefield: PropTypes.array
}

export default connect()(AttackGrid);



// <div className="grid-container">
//
//   {Object.keys(props.battlefield).map((square, index) =>
//     <div key={index} className="square">{square}</div>
//   )}
// </div>
