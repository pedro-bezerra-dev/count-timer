// server
const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes.js')

// static files
app.use(express.static('public'))

// routes
app.get('/', routes.index)
app.get('/create-event', routes.pageCreateEvent)
app.get('/event', routes.pageEvent)
app.get('/events', routes.pageEvents)
app.get('/sucess', routes.pageSucess)

app.listen(port, () => {
  console.log(`Working in port ${port}`)
})
