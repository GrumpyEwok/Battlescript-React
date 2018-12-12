// import constants from './../constants';
// import * as functions from './../constants/businessLogic';
import { createState, initializeOcean, createBattleField, getCoords, isCoordsValid, getShipCoords, updateBattlefield, updateFleet, random } from './../constants/businessLogic';

export default (state = {}, action) => {

  //start game will do:
  // - create two oceans
  // - fill oceans with fleets
  // set those oceans/fleets to p1 and p2's battlefield/position arrays

  switch (action.type) {

  case 'START_GAME':

    const newState = createState();
    console.log(newState);
    return newState;

  default:
    return state;
  }
}
