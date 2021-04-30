async function addEvent(db, name, date) {
  await db.run(`
    INSERT INTO events (
      name,
      date
    ) VALUES (
      "${name}",
      "${date}"
    );
  `);
}

module.exports = addEvent;
