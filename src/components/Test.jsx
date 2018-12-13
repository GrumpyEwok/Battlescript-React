import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attack } from './../actions';


function Test(props) {

  const clicker = (event) => {
    event.preventDefault();
    console.log(props.battlefield);
    console.log(props.position);
    const bf = props.battlefield;
    const pos = props.position;
    const { dispatch } = props;
    const theState = {
      battlefield: bf,
      position: pos
    }
    console.log(theState);
    dispatch(attack(theState, {x: 0, y: 0}))
    console.log('an attack happened!');
  }

  return(
    <div>
      <button onClick={clicker}>CLICK TO TEST ATTACK</button>
    </div>
  )

};

export default connect()(Test);
