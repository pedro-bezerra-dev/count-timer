/* eslint-disable global-require */
function init() {
  const Database = require('better-sqlite3');

  // eslint-disable-next-line no-console
  const db = new Database('./.count-timer.db', { verbose: console.log });

  db.exec(`
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        date TEXT
      );
  `);

  return db;
}

module.exports = { init };
