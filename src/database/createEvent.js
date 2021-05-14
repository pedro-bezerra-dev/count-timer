function addEvent(db, name, date) {
  return db.run(`
    INSERT INTO events (
      name,
      date
    ) VALUES (
      "${name}",
      "${date}"
    );
  `)
}

module.exports = addEvent;
