const routes = {
  index(req, res) {
    res.sendFile(__dirname + '/view/index.html')
  }
}

module.exports = routes
