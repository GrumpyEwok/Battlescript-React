import React, { Component } from 'react';
import './../styles/App.css';
import KonvaTest from './KonvaTest';
import AttackGrid from './AttackGrid';
import DefendGrid from './DefendGrid';
import Header from './Header';
import Stats from './Stats';

class App extends Component {
  constructor() {
    super();
    this.state = {isGameRunning: true};
  }

  render() {
    const isGameRunning = this.state.isGameRunning;
    let game;

    if (isGameRunning) {
      game =  <div><p>Game Goes Here!</p><KonvaTest/></div> ;
    } else {
      game = <p> isGameRunning: False </p>;
    }

    return (
      <div className="App">
        <Header/>
        <AttackGrid/>
        <DefendGrid/>
        <Stats/>
      </div>
    );
  }
}

export default App;
