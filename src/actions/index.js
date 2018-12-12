import constants from './../constants';

export function startGame() {
  return {
    type: 'START_GAME'
  };
}

export function attack(playerEntry, coordsObject) {
  return {
    type: 'ATTACK',
    coords: coordsObject
  };
}
