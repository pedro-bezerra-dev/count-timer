const routes = {
  index(req, res) {
    res.sendFile(__dirname + '/view/index.html')
  },

  pageCreateEvent(req, res) {
    res.sendFile(__dirname + '/view/page-create-event.html')
  },

  pageEvent(req, res) {
    res.sendFile(__dirname + '/view/page-event.html')
  },

  pageEvents(req, res) {
    res.sendFile(__dirname + '/view/page-events.html')
  },

  pageSucess(req, res) {
    res.sendFile(__dirname + '/view/page-sucess.html')
  },
}

module.exports = routes
