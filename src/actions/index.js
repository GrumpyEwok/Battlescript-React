// import Firebase from 'firebase';
import constants from './../constants';
// const { firebaseConfig } = constants;

// firebase.initializeApp(firebaseConfig);

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
