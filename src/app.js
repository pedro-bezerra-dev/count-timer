// server
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const routes = require('./routes.js')

// static files
app.use(express.static('public'))

// routes
app.get('/', routes.index)

app.listen(port, () => {
  console.log(`Working in port ${port}`)
})
