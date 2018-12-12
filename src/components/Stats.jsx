import React from 'react';
import PropTypes from 'prop-types';

function Stats() {
  // State?
  let turnCounter = 0;
  let score = 0; 
  
  return(

    <div className="stats">
    <style jsx>{`
      .stats {
        width: 15rem;
        border: 3px solid aqua;
        background-color: saddlebrown;
        color: lightblue;
      }
      ul {
        list-style: none;
      }
      li {
        text-align: left;
        margin: 0;
        padding: 0;
      }
    `}</style>
      <ul>

        <li>Turn Counter: {turnCounter}</li>
        <hr/>
        <li>Score: {score}</li>
      </ul>
    </div>
  )
}

export default Stats;
