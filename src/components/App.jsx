import React, { Component } from 'react';
import './../styles/App.css';
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
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(startGame());
    console.log('new game dispatched!');
  }

  componentDidMount() {
    console.log(this.props);    
  }

  render() {

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
