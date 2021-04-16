// server
const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes.js')

app.get('/', routes.index)

app.listen(port, () => {
  console.log(`Working in port ${port}`)
})
