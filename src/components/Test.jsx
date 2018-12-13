import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attack } from './../actions';


function Test(props) {

  const clicker = (event) => {
    event.preventDefault();
    const bf = props.battlefield;
    const pos = props.position;
    const { dispatch } = props;
    const theState = {
      battlefield: props.battlefield,
      position: props.position
    }

    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10);
    dispatch(attack(theState, {x: randomX, y: randomY}));

  }

  return(
    <div>
      <button onClick={clicker}>CLICK TO TEST ATTACK</button>
    </div>
  )

};

export default connect()(Test);
