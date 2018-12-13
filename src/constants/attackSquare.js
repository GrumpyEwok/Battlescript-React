// START HERE!!!

export const attackSquare = (state, coordsObject) => {

  console.log('i am in attackSquare');
  console.log(state);
  let newState;
  const { x, y } = coordsObject;
  const target = state.battlefield[y][x];
  const positionArray = state.position;

  if (target === 2) {
    alert('This coordinate has already been shot by you today now see?');
    return state;
  } if (target === 0) {
    newState = Object.assign({}, state, {
      //BROKEN RIGHT HERE
      //was "ticket: 2"
    });

    alert('You missed the boat.')
    return newState;
  } if (target === 1) {

      let sq = {}
      positionArray.forEach((ship, shipIndex) => {
        ship.forEach((square, squareIndex) => {
          if (square.x === x && square.y === y) {
            sq.position[shipIndex][squareIndex] = 2;
            sq.battlefield[y][x] = 2;
          }
        });
      });
      newState = Object.assign({}, state, sq);
    return newState;
  } else {
    alert('something is wrong with the "const target =" of your attack')
  }

    // response.state = state
    alert('Hit')

  const sank = state.position.map(yInPositionArray => {
    return yInPositionArray.every(xInPositionArray => xInPositionArray === 2)
  })

  const isSank = sank.some(xInSankArray => xInSankArray === true)

  const sankType = sank.map((xInSankArray, i) => {
    if (xInSankArray) {
      switch (state.position[i].length) {
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
    const start = state.position.slice(0, removed)
    const end = state.position.slice(removed+1, state.position.length)
    state.position = [ ...start, ...end ]


    // response.state = state
    // response.msg = `You just sank the ${sankType[0].type}`
  }

  if (state.position.length === 0) {
    // response.state.finished = true
    alert('The game has been won! It lasted for')
    // response.msg = `Win! You completed the game in ${state[playerEntry].counter} moves`
  }

  return newState;
}
