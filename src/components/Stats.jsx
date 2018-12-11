import React from 'react';
import PropTypes from 'prop-types';

function Stats() {
  let turnCounter = 0;
  let score = 0;

  return(
    <div>
      <ul style="list-style:none">
        <li>Turn Counter: {turnCounter}</li>
        <li>Score: {score}</li>
      </ul>
    </div>
  )
}

export default Stats;
