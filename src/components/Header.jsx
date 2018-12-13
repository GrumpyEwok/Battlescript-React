import React from 'react';
import PropTypes from 'prop-types';


function Header() {

  return(
    <div className="header">
      <style jsx>{`
        .header {
          width: 100%;
          height: 8.5rem;
          background-color: black;
          color: green;
        }
        h1 {
          margin-top: 3rem;
          font-size: 3.5rem;
        }
        p {
          margin-top: 6px;
          font-size: 1rem;
        }
      `}</style>
      <div className="logo">
      </div>
      <div>
      <h1>Battlescript</h1>
      <p>It's like battleship, but better.</p>
      </div>
    </div>
  )

};

export default Header;
