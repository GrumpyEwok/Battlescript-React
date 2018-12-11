import React, { Component } from 'react';
<<<<<<< HEAD:src/components/App.jsx
import './../styles/App.css';
import KonvaTest from './KonvaTest';
import AttackGrid from './AttackGrid';
import DefendGrid from './DefendGrid';
import Header from './Header';
import Stats from './Stats';
=======
import Header from './components/Header';

import './App.css';
import KonvaTest from './components/KonvaTest';
>>>>>>> master:src/App.jsx

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
<<<<<<< HEAD:src/components/App.jsx
        <AttackGrid/>
        <DefendGrid/>
        <Stats/>
=======
        {game}
>>>>>>> master:src/App.jsx
      </div>
    );
  }
}

export default App;
