import React from 'react';
import PropTypes from 'prop-types';


function Header() {

  return(
    <div className="header">
      <style jsx>{`
        .header {
          width: 100%;
          height: 6rem;
          background-color: lightblue;
          color: tomato;
        }
      `}</style>
      <h1>BattleScripts</h1>
      <p>You will be able to play battleship here!</p>
    </div>
  )

};

export default Header;
