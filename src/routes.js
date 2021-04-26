const fakedata = require('./database/fakedata.js')
const dataConverter = require('./utils/manipulatingData.js')
const database = require('./database/dbInit.js')
const createEvent = require('./database/createEvent.js')

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

      console.log(eventName, eventDate)

      const db = await database
      await createEvent(db, eventName, eventDate)

    } catch (error) {

      console.log(error)
      res.send("Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report us on our page: https://github.com/pedro-henrique-sb/count-timer/issues")
      
    }

    res.redirect('/sucess')
  },

  pageEvent(req, res) {
    res.render('page-event.html')
  },

  pageEvents(req, res) {
    res.render('page-events.html', { events: fakedata })
  },

  pageSucess(req, res) {
    res.render('page-sucess.html')
  },

  pageTest(req, res) {
      res.render('test.html', { fakedata })
  }
}

module.exports = routes
