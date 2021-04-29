const database = require('./database/dbInit.js')

async function allEvents() {
  const db = await database
  const allEvents = await db.all('SELECT * FROM events')

  return allEvents
}

module.exports = allEvents