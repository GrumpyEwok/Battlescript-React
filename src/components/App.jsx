import React, { Component } from 'react';
import './../styles/App.scss';
import KonvaTest from './KonvaTest';
import AttackGrid from './AttackGrid';
import DefendGrid from './DefendGrid';
import Header from './Header';
import Stats from './Stats';
import { connect } from 'react-redux';
// import constants from './../constants';
import { startGame } from './../actions';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
      super();
      this.state = {isGameRunning: true};
    }

    render() {
      const isGameRunning = this.state.isGameRunning;
      let game;

      if (isGameRunning) {
        game =  <div><KonvaTest/></div> ;
      } else {
        game = <p> isGameRunning: False </p>;
      }

    return (
      <div className="App scanlines">
        <Header/>
        {game}
        <AttackGrid/>
        <DefendGrid/>
        <Stats/>
      </div>
    );
  }
}

App.propTypes = {
  battlefield: PropTypes.array,
  position: PropTypes.array
}

const mapStateToProps = state => {
  return{
    battlefield: state.battlefield,
    position: state.position
  }
}

export default connect(mapStateToProps)(App);
