import { createState, initializeOcean, createBattleField, getCoords, isCoordsValid, getShipCoords, updateBattlefield, updateFleet, random } from './../constants/businessLogic';
import { attackSquare } from './../constants/attackSquare';
import PropTypes from 'prop-types';

export default (state = {cat: 'doug'}, action) => {
  let newState;

  switch (action.type) {

  case 'START_GAME':

    newState = createState();
    console.log(newState);
    return newState;

  case 'ATTACK':

    const stateAfterAttack = attackSquare(action.state, action.coordsObject);
    newState = Object.assign({}, stateAfterAttack);
    console.log(newState);
    return newState;

  default:
    return state;
  }
}
