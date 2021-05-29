/* eslint-disable import/no-dynamic-require */
const path = require('path');

const { counter } = require(path.join(__dirname, '../', 'utils', 'counterHidden.js'));

function main(allEvents) {
  allEvents.forEach((event) => {
    const eventName = event.name;
    const eventDate = event.date;

    counter(eventName, eventDate);
  });
}

module.exports = { main };
