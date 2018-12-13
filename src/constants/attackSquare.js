// START HERE!!!

export const attackSquare = (state, coordsObject) => {

  let newState;
  const { x, y } = coordsObject;
  console.log('X is ' + x);
  console.log('Y is ' + y);
  const battlefieldArray = state.battlefield;
  const positionArray = state.position;
  const target = battlefieldArray[y][x];

  if (target === 2) {
    // alert('This coordinate has already been shot by you today now see?');
    console.log('This coordinate has already been shot by you today now see?');
    return state;
  } if (target === 0) {
    const subBattlefieldArray = battlefieldArray[y];
    console.log('Sub array:')
    console.log(subBattlefieldArray);

    subBattlefieldArray.splice(x, 1, 2)
    console.log('mutated sub array:');
    console.log(subBattlefieldArray);

    battlefieldArray.splice(y, 1, subBattlefieldArray);
    console.log('mutated battlefield array:');
    console.log(battlefieldArray);

    newState = Object.assign({}, state, {
      battlefield: battlefieldArray
    });

    alert('You missed the boat.')
    console.log('You missed the boat.');
    return newState;
  } if (target === 1) {

      let sq = Object.assign({}, state) //this somehow works now
      positionArray.forEach((ship, shipIndex) => {
        ship.forEach((square, squareIndex) => {
          if (square.x === x && square.y === y) {
            sq.position[shipIndex][squareIndex] = 2;
            sq.battlefield[y][x] = 2;
          }
        });
      });
      newState = Object.assign({}, state, sq);
      alert('You hit something!  Hooray!')
      console.log('Hit');
      console.log('almost to sank!');

      const sank = state.position.map(topLevelArrayValue => {
        return topLevelArrayValue.every(bottomLevelArrayValue => bottomLevelArrayValue === 2)
      })

      const isSank = sank.some(xInSankArray => xInSankArray === true)

      const sankType = sank.map((xInSankArray, i) => {
        if (xInSankArray) {
          switch (state.position[i].length) {
            case 4:
            alert("You sank a battleship!")
            console.log("You sank a battleship!");
            return { type: 'battleship', index: i }
            case 3:
            alert("You sank a cruiser!")
            console.log("You sank a cruiser!");

            return { type: 'cruiser', index: i }
            case 2:
            alert("You sank a destroyer!")
            console.log("You sank a destroyer!");

            return { type: 'destroyer', index: i }
            case 1:
            alert("You sank a submarine!")
            console.log("You sank a submarine!");

            return { type: 'submarine', index: i }
            default:
            alert("You sank a boat?!")
            console.log("You sank a boat?!");

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

        // const removed = sankType[0].index
        // const start = state.position.slice(0, removed)
        // const end = state.position.slice(removed+1, state.position.length)
        // state.position = [ ...start, ...end ]


        // response.state = state
        // response.msg = `You just sank the ${sankType[0].type}`
        function findTwos(number) {
          return number === 2;
        }

        const endgameArray = [];
        state.position.forEach((shipArray) => {
          booleanValue = shipArray.every(findTwos);
          endgameArray.push(booleanValue)
        });



        if (endgameArray.every(arrayValue => arrayValue === true)) {
          // response.state.finished = true
          alert('The game has been won! It lasted for a while!')
          console.log('The game has been won! It lasted for a while!');
          // response.msg = `Win! You completed the game in ${state[playerEntry].counter} moves`
        }
        return newState;
      }

  } else {
    alert('something is wrong with the "const target =" of your attack')
    console.log('something is wrong with the "const target =" of your attack');
  }

    // response.state = state

  // return newState;
}
