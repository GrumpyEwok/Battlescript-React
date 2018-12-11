import React, { component } from 'react';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      isFinished: false,
      turnCounter: 0, // Increment up on Attack Committed
      players: {
        player1: {
          battlefield: [], // An array of 10 arrays.
          position: [], // An Array of co-ords. 0 = Empty. 1 = Occupied. 2 = Hit.
        },
        player2: {
          battlefield: [],
          position: [],
        },
      }
    };
  }

}

export default Game;
