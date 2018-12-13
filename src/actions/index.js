export function startGame() {
  return {
    type: 'START_GAME'
  };
}

export function attack(state, coordsObject) {
  return {
    type: 'ATTACK',
    state: state,
    coordsObject: coordsObject
  };
}
