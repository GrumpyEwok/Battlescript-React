import React from 'react';
import PropTypes from 'prop-types';

function Stats() {
  // State?
  let turnCounter = 0;
  let score = 0;

  const noList = {
    listStyle: 'none',
  };

  return(
    <div>
      <ul style={noList}>
        <li>Turn Counter: {turnCounter}</li>
        <li>Score: {score}</li>
      </ul>
    </div>
  )
}

export default Stats;
