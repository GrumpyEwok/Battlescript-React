export function initializeOcean (size, array) {
  if (array && array.length === size) {
    return array
  }

  if (typeof array === 'undefined') {
    return initializeOcean(size, [].concat([ Array(size).fill(0) ]))
  }

  return initializeOcean(size, array.concat([ Array(size).fill(0) ]))
}

export function createBattleField (state, board, fleet) {

  if (fleet.length === 0) {
    state.battlefield = board
    return state
  }

  const {x, y} = getCoords(10)
  const coords = getShipCoords([{ x, y }], fleet.length)
  const shipFitInBoard = coords.length === fleet.length
  const validity = coords.every(elem => isCoordsValid(board, fleet, elem.x, elem.y))

  if (shipFitInBoard && validity) {
    const newBoard = updateBattlefield(board, coords)
    const newFleet = updateFleet(fleet)
    state.position = state.position.concat([ coords ])

    return createBattleField(state, newBoard, newFleet)
  }

  return createBattleField(state, board, fleet)
}

export function getCoords (max) {
  return {
    x: Math.floor(Math.random() * max),
    y: Math.floor(Math.random() * max)
  }
}

export function isCoordsValid (board, fleet, x, y) {
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

export function getShipCoords (coords, blocks) {
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

export function updateBattlefield (board, coords) {
  return coords.reduce((acc, obj) => {
    acc[obj.y][obj.x] = 1
    return acc
  }, board)
}

export function updateFleet (fleet) {
  const ships = fleet[fleet.length - 1]
  const newShop = fleet.slice(0, fleet.length - 1)

  if (ships > 1) {
    return newShop.concat(ships - 1)
  }

  return newShop
}

export function random (array) {
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

export function createState () {
  let initialState = {
    battlefield: [], // An array of 10 arrays.
    position: [], // An Array of co-ords. 0 = Empty. 1 = Occupied. 2 = Hit.
  }
  console.log(initialState);
  initialState = createBattleField(initialState, initializeOcean(10), [4, 3, 2, 1]);
  console.log(initialState);

  initialState = Object.assign({}, initialState);
  console.log(initialState);

  return initialState;
}
