const path = require('path')
const { counter } = require(path.join(__dirname, '../', 'utils', 'counterHidden.js'))

function main(allEvents) {
  allEvents.forEach((event) => {
    console.log(event)
  })
}

module.exports = { main }
