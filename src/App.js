import React, { Component } from 'react';
import './App.css';
import KonvaTest from './components/KonvaTest';

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
        <header className="App-header">
          <p>This is a header!</p>
        </header>
        {game}
      </div>
    );
  }
}

export default App;
