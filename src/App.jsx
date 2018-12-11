import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {isGameRunning: true};
  }

  render() {
    const isGameRunning = this.state.isGameRunning;
    let game;

    if (isGameRunning) {
      game =  <p>Game Goes Here!</p> ;
    } else {
      game = <p> </p>;
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
