import React from 'react';
import PropTypes from 'prop-types';


function Header() {

  return(
    <div className="header">
      <style jsx>{`
        .header {
          width: 100%;
          height: 6rem;
          background-color: black;
          color: green;
        }
      `}</style>
      <h1>BattleScripts</h1>
      <p>The finest simulator of modern naval operations!</p>
    </div>
  )

};

export default Header;
