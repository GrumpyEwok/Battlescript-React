import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attack } from './../actions';
import './../styles/Test.css';


function Test(props) {

  let _x = null;
  let _y = null;

  const topZ = {
    zIndex: '1000'
  }

  const biggie = {
    height: '5rem',
    fontSize: '3rem'
  }

  const clicker = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    const theState = {
      battlefield: props.battlefield,
      position: props.position
    }
    // const randomX = Math.floor(Math.random() * 10);
    // const randomY = Math.floor(Math.random() * 10);
    dispatch(attack(theState, {x: _x.value, y: _y.value}));
    _x.value = '';
    _y.value = '';

  }



  return(
    <div >
      <input style={biggie} type="number" max="9" ref={(input) => {_x = input}} placeholder="Input X coordinate"></input>
      <input style={biggie} type="number" max="9" ref={(input) => {_y = input}} placeholder="Input Y coordinate"></input>
      <button style={biggie} onClick={clicker}>Click to attack</button>
    </div>
  )

};

export default connect()(Test);
