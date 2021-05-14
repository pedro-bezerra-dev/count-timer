function init() {
  const Database = require('better-sqlite3')

  const db = new Database('./main.db', { verbose: console.log })

  db.exec(`
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        date TEXT
      );
  `);

  return db
}

module.exports = { init }
