export default (state = {}, action) => {

  //when an attack action is dispatched, this reducer does:
  // - checks to see if a ship is hit
  // - changes 0 or 1 to 2 in the other player's positions array if a ship is hit
  // - changes 0 or 1 to 2 in the other player's battlefield array
  // - if a ship is hit, check to see if it's been sunk
  // - update state

  let newState;
  //do we need to make allllllllll if branches below set newState instead of returning it?

  switch (action.type) {

  case 'ATTACK':
    return XXXXX;

  default:
    return state;
  }
}

//******************************************************************************

function attack (playerNumber, coordsObject) {

  const playerState = state[players][playerNumber];
  const { x, y } = coordsObject;


//coords are 0-9, aka indices (not 1-10)
  // const response = { }

  if (state.finished === true) {
    // response.playerState = playerState
    // response.msg = 'Dude it\'s finished!'
    return state;
  }

  state.counter ++;
  const target = playerState.battlefield[y][x];

  if (target === 2) {
    // response.playerState = playerState
    // response.msg = 'You already hit this position!'
    return state;
  } else if (target === 0) {
    newState = Object.assign({}, state, {
      playerState.battlefield[y][x]: 2;
    })

    return newState;
    // response.playerState = playerState
    // response.msg = `Miss New Hampshire is ${playerState.battlefield}`
  } else if (target === 1) {
    newState = Object.assign({}, state, {
      playerState.position.forEach((ship, shipIndex) => {
        ship.forEach((square, squareIndex) => {
          if (square.x === x && square.y === y) {
            playerState.position[shipIndex][squareIndex] = 2;
            playerState.battlefield[y][x] = 2;
          }
        });
      });
    });
    return newState;
  } else {
    alert('something is wrong with the "const target =" of your attack')
  }

    // response.playerState = playerState
    // response.msg = 'Hit'

  const sank = playerState.position.map(yInPositionArray => {
    return yInPositionArray.every(xInPositionArray => xInPositionArray === 2)
  })

  const isSank = sank.some(xInSankArray => xInSankArray === true)

  const sankType = sank.map((xInSankArray, i) => {
    if (xInSankArray) {
      switch (playerState.position[i].length) {
        case 4:
          return { type: 'battleship', index: i }
        case 3:
          return { type: 'cruiser', index: i }
        case 2:
          return { type: 'destroyer', index: i }
        case 1:
          return { type: 'submarine', index: i }
        default:
          return { type: 'boat', index: i }
      }
    }
    else {
      return false
    }
  }).filter(xInSankArray => xInSankArray !== false)

  if (isSank) {
    
    // THIS IS WEIRD, SO LIKE GO OVER THIS FIRST THING... DA-BUGG IT!
    // what do we do with state here???

    const removed = sankType[0].index
    const start = playerState.position.slice(0, removed)
    const end = playerState.position.slice(removed+1, playerState.position.length)
    playerState.position = [ ...start, ...end ]


    // response.playerState = playerState
    // response.msg = `You just sank the ${sankType[0].type}`
  }

  if (playerState.position.length === 0) {
    // response.playerState.finished = true
    // response.msg = `Win! You completed the game in ${playerState[playerEntry].counter} moves`
  }

  return newState;
}
