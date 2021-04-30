const database = require('sqlite-async')

function createDatabase(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      date TEXT
    );
  `)
}

module.exports = database.open(__dirname + '/database.sqlite').then(db => createDatabase(db)).catch(err => console.log(err))