const fakedata = require('./database/fakedata.js')
const dataConverter = require('./utils/manipulatingData.js')
const database = require('./database/dbInit.js')
const createEvent = require('./database/createEvent.js')
const allEvents = require('./database/getAllEvents.js')
const formatterDate = require('./utils/formatterDate.js')

const routes = {
  index(req, res) {
    res.render('index.html')
  },

  pageCreateEvent(req, res) {
    res.render('page-create-event.html')
  },

  async createEvent(req, res) {
    const eventData = req.body
    const eventName = eventData.name
    const eventDate = dataConverter(eventData)

    try {

      const db = await database
      await createEvent(db, eventName, eventDate)

    } catch (error) {
      console.log(error)
      res.send("Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report us on our page: https://github.com/pedro-henrique-sb/count-timer/issues")
      
    }

    res.redirect('/sucess')
  },

  async pageEvent(req, res) {
    try {

      const eventID = req.query.id
      const db = await database
      const event = await db.all(`SELECT * FROM events WHERE id=${eventID}`)

      res.render('page-event.html', { event: event[0] })

    } catch (error) {
      
      res.send("Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report us on our page: https://github.com/pedro-henrique-sb/count-timer/issues")

    }
  },

  async pageEvents(req, res) {
    try {

      const comand = 'SELECT * FROM events;'
      const db = await database
      const events = await db.all(comand)
      var formatedDates = []
      events.forEach(event => {
        const formatedDate = formatterDate(event.date)
        formatedDates.push(formatedDate)
      })

      res.render('page-events.html', { events, formatedDates })

    } catch (error) {

      res.send("Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report us on our page: https://github.com/pedro-henrique-sb/count-timer/issues")
      
    }
  },

  pageSucess(req, res) {
    res.render('page-sucess.html')
  },

  pageTest(req, res) {
      res.render('test.html', { fakedata })
  }
}

module.exports = routes
