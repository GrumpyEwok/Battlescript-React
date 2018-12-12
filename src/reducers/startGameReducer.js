export default (state = {}, action) => {

  //start game will do:
  // - create two oceans
  // - fill oceans with fleets
  // set those oceans/fleets to p1 and p2's battlefield/position arrays

  switch (action.type) {

  case 'START_GAME':

    let playerEntry;

    function initializeOcean (size, array) {
      if (array && array.length === size) {
        return array
      }

      if (typeof array === 'undefined') {
        return initializeOcean(size, [].concat([ Array(size).fill(0) ]))
      }

      return initializeOcean(size, array.concat([ Array(size).fill(0) ]))
    }

    function createBattleField (playerState, board, fleet) {
      if (playerState.p1State) {
        playerEntry = "player1"
      }

      if (playerState.p2State) {
        playerEntry = "player2"
      }

      if (fleet.length === 0) {
        playerState[playerEntry].battlefield = board
        return playerState
      }

      const {x, y} = getCoords(10)
      const coords = getShipCoords([{ x, y }], fleet.length)
      const shipFitInBoard = coords.length === fleet.length
      const validity = coords.every(elem => isCoordsValid(board, fleet, elem.x, elem.y))

      if (shipFitInBoard && validity) {
        const newBoard = updateBattlefield(board, coords)
        const newFleet = updateFleet(fleet)
        playerState[playerEntry].position = playerState[playerEntry].position.concat([ coords ])

        return createBattleField(playerState, newBoard, newFleet)
      }

      return createBattleField(playerState, board, fleet)
    }

    function getCoords (max) {
      return {
        x: Math.floor(Math.random() * max),
        y: Math.floor(Math.random() * max)
      }
    }

    function isCoordsValid (board, fleet, x, y) {
      const upperBound = x > board.length - 1 || y > board.length - 1
      const lowerBound = x < 0 || y < 0

      if (upperBound || lowerBound) {
        return false
      }

      const topLeft = board[y-1] && board[y-1][x-1] ? board[y-1][x-1] : 0
      const topRight = board[y-1] && board[y-1][x+1] ? board[y-1][x+1] : 0
      const bottomRight = board[y+1] && board[y+1][x+1] ? board[y+1][x+1] : 0
      const bottomLeft = board[y+1] && board[y+1][x-1] ? board[y+1][x-1] : 0
      const dAdj = topLeft + topRight + bottomRight + bottomLeft

      const top = board[y-1] && board[y-1][x] ? board[y-1][x] : 0
      const right = board[y] && board[y][x+1] ? board[y][x+1] : 0
      const bottom = board[y+1] && board[y+1][x] ? board[y+1][x] : 0
      const left = board[y] && board[y][x-1] ? board[y][x-1] : 0
      const adj = top + right + bottom + left

      if (fleet.length === 1) {
        return (board[y][x] === 0 && dAdj === 0 && adj === 0)
      }

      return (board[y][x] === 0 && dAdj === 0 && adj <= 1)
    }

    function getShipCoords (coords, blocks) {
      const { x, y } = coords[coords.length - 1]
      let diffX = coords.length > 1 ? coords[coords.length - 1].x - coords[coords.length - 2].x : 0
      let diffY = coords.length > 1 ? coords[coords.length - 1].y - coords[coords.length - 2].y : 0

      if (blocks === 1) {
        return coords
      }

      if (coords.length === 1 && blocks > 1) {
        const list = [
          {x: x, y: y-1},
          {x: x+1, y: y},
          {x: x, y: y+1},
          {x: x-1, y: y}
        ]
        const filtered = list.filter(obj => obj.x >= 0  && obj.y >= 0)
        const direction = random(filtered)
        diffX = direction.x - x
        diffY = direction.y - y
      }

      const direction = { x: x+diffX, y: y+diffY }

      return getShipCoords(coords.concat(direction), blocks - 1)
    }

    function updateBattlefield (board, coords) {
      return coords.reduce((acc, obj) => {
        acc[obj.y][obj.x] = 1
        return acc
      }, board)
    }

    function updateFleet (fleet) {
      const ships = fleet[fleet.length - 1]
      const newShop = fleet.slice(0, fleet.length - 1)

      if (ships > 1) {
        return newShop.concat(ships - 1)
      }

      return newShop
    }

    function random (array) {
      const idx = Math.floor(Math.random() * array.length)
      return array[idx]
    }

    function createState () {
      let p1State = {player1: {
        battlefield: [], // An array of 10 arrays.
        position: [], // An Array of co-ords. 0 = Empty. 1 = Occupied. 2 = Hit.
        score: 0
      }}

      let p2State = {player2: {
        battlefield: [], // An array of 10 arrays.
        position: [], // An Array of co-ords. 0 = Empty. 1 = Occupied. 2 = Hit.
        score: 0
      }}

      p1State = createBattleField(p1State, initializeOcean(10), [4, 3, 2, 1]);
      p2State = createBattleField(p2State, initializeOcean(10), [4, 3, 2, 1]);


      // db = createBattleField(db, initializeOcean(OCEAN_SIZE), FLEET)
      const newState = Object.assign({}, state, {
        isFinished: false,
        turnCounter: 0, // Increment up on Attack Committed
        players: {
          p1State,
          p2State
        }
      });

      return newState
    }


    createState();

  default:
    return state;
  }
}
