'use strict'

const app = require('express')()
const Api = require('./api')

let db = Api.createDb()

app.post('/attack', (req, res) => {
  const coords = req.query.coord.split('_')
  const x = parseInt(coords[0], 10)
  const y = parseInt(coords[1], 10)

  if (x < 1 || x > 10 || y < 1 || y > 10) {
    return res.send('Coordinates out of boundaries')
  }

  const result = Api.attack(db, { x: x - 1, y: y - 1 })
  db = result.db

  return res.send(result.msg)
})

app.get('/restart', (req, res) => {
  db = Api.createDb()

  return res.send(`Battlefield restarted! Now it is: ${db.battlefield}`)
})

app.listen(8080, () => {
  console.log('Server running on port 8080...')
})
