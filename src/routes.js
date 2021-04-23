const fakedata = require('./database/fakedata.js')

const routes = {
  index(req, res) {
    res.render('index.html')
  },

  pageCreateEvent(req, res) {
    res.render('page-create-event.html')
  },

  pageEvent(req, res) {
    res.render('page-event.html')
  },

  pageEvents(req, res) {
    res.render('page-events.html')
  },

  pageSucess(req, res) {
    res.render('page-sucess.html')
  },

  pageTest(req, res) {
      res.render('test.html', { fakedata })
  }
}

module.exports = routes
