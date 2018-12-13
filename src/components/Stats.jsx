import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnCounter: 0,
      score: 10000
    }
  }

  componentDidMount() {
    let score= this.state.score;
    let turnCounter = this.state.turnCounter;
    
    setInterval( () => {
      this.setState({score: score--}); this.setState({turnCounter: turnCounter++})}, 5000)
    };


    render() {
      return(


        <div className="stats">
          <style jsx>{`
              .stats {
                width: 15rem;
                border: 3px solid aqua;
                background-color: saddlebrown;
                color: lightblue;
              }
              ul {
                list-style: none;
              }
              li {
                text-align: left;
                margin: 0;
                padding: 0;
                color: black;

              }
              `}</style>
            <ul>

              <li>Turn Counter: {this.state.turnCounter}</li>
              <hr/>
              <li>Score: {this.state.score}</li>
            </ul>
          </div>
        )
      }
    }
    export default Stats;
