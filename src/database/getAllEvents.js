const database = require('./database/dbInit.js')

const db = await database
const allEvents = await db.all('SELECT * FROM events')

module.exports = allEvents