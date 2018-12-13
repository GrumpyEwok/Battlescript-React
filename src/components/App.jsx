import React, { Component } from 'react';
import './../styles/App.scss';
import KonvaTest from './KonvaTest';
import AttackGrid from './AttackGrid';
import DefendGrid from './DefendGrid';
import Header from './Header';
import Stats from './Stats';
import { connect } from 'react-redux';
import { startGame } from './../actions';
import PropTypes from 'prop-types';
import Test from './Test';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {isGameRunning: true};
      console.log(this.props);
    }

    componentWillMount() {
      console.log('dispatched!');
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(startGame());
      console.log('MOUNTED' + this.props);
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
        <Test battlefield={this.props.battlefield} position={this.props.position}/>
        <Stats/>
      </div>
    );
  }
}

// App.propTypes = {
//   battlefield: PropTypes.array,
//   position: PropTypes.array
// }

const mapStateToProps = state => {
  return{
    battlefield: state.battlefield,
    position: state.position
  }
}

export default connect(mapStateToProps)(App);
