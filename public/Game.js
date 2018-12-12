'use strict'
const OCEAN_SIZE = 10
const FLEET = [4, 3, 2, 1]

function attack (playerState, coords) {
  debugger
  const { x, y } = coords

  if (playerState.p1State) {
    const playerEntry = "player1"
  }

  if (playerState.p2State) {
    const playerEntry = "player2"
  }

//coords are 0-9, aka indices (not 1-10)
  const response = { }

  if (playerState[playerEntry].finished === true) {
    response.playerState[playerEntry] = playerState[playerEntry]
    response.msg = 'Dude it\'s finished!'

    return response
  }

  playerState[playerEntry].counter += 1
  const target = playerState[playerEntry].battlefield[y][x]

  if (target === 2) {
    response.playerState[playerEntry] = playerState[playerEntry]
    response.msg = 'You already hit this position!'
  }

  if (target === 0) {
    playerState[playerEntry].battlefield[y][x] = 2
    response.playerState[playerEntry] = playerState[playerEntry]
    response.msg = `Miss New Hampshire is ${playerState[playerEntry].battlefield}`
  }

  if (target === 1) {
    playerState[playerEntry].position.forEach((ship, idxShip) => {
      ship.forEach((block, idxBlock) => {
        if (block.x === x && block.y === y) {
          playerState[playerEntry].position[idxShip][idxBlock] = 2
          playerState[playerEntry].battlefield[y][x] = 2
        }

      })
    })
    response.playerState[playerEntry] = playerState[playerEntry]
    response.msg = 'Hit'
  }

  const sank = playerState[playerEntry].position.map(y => {
    return y.every(x => x === 2)
  })

  const isSank = sank.some(x => x === true)

  const sankType = sank.map((x, i) => {
    if (x) {
      switch (playerState[playerEntry].position[i].length) {
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
  })
  .filter(x => x !== false)

  if (isSank) {
    const removed = sankType[0].index
    const start = playerState[playerEntry].position.slice(0, removed)
    const end = playerState[playerEntry].position.slice(removed+1, playerState[playerEntry].position.length)
    playerState[playerEntry].position = [ ...start, ...end ]
    response.playerState[playerEntry] = playerState[playerEntry]
    response.msg = `You just sank the ${sankType[0].type}`
  }

  if (playerState[playerEntry].position.length === 0) {
    response.playerState[playerEntry].finished = true
    response.msg = `Win! You completed the game in ${playerState[playerEntry].counter} moves`
  }

  return response
}

function createDb () {
  let db = {
    battlefield: [],
    position: [],
    counter: 0,
    finished: false
  }
  db = createBattleField(db, initializeOcean(OCEAN_SIZE), FLEET)

  return db
}

// 10, [0,0,0,0,0,0,0,0,0,0]

function initializeOcean (size, array) {
  if (array && array.length === size) {
    return array
  }

  if (typeof array === 'undefined') {
    return initializeOcean(size, [].concat([ Array(size).fill(0) ]))
  }

  return initializeOcean(size, array.concat([ Array(size).fill(0) ]))
}

function createBattleField (db, board, fleet) {
  if (fleet.length === 0) {
    db.battlefield = board
    return db
  }

  const {x, y} = getCoords(10)
  const coords = getShipCoords([{ x, y }], fleet.length)
  const shipFitInBoard = coords.length === fleet.length
  const validity = coords.every(elem => isCoordsValid(board, fleet, elem.x, elem.y))

  if (shipFitInBoard && validity) {
    const newBoard = updateBattlefield(board, coords)
    const newFleet = updateFleet(fleet)
    db.position = db.position.concat([ coords ])

    return createBattleField(db, newBoard, newFleet)
  }

  return createBattleField(db, board, fleet)
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

module.exports = {
  createDb,
  getShipCoords,
  isCoordsValid,
  updateBattlefield,
  updateFleet,
  attack
}
