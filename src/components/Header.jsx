import React from 'react';
import PropTypes from 'prop-types';


function Header() {

  return(
    <div className='Header scanlines'>
      <div className='container'>
        <div className='logo-a'>
        </div>
      </div>
      <div>
        <h1>Battlescript</h1>
        <p>It's like battleship, but better.</p>
      </div>
      <div className='container'>
        <div className='logo-b'>
        </div>
      </div>
    </div>
  )

};

export default Header;
