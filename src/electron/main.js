const { app, BrowserWindow } = require('electron')
const path = require('path')
const startServer = require(path.join(__dirname, '../', 'app.js'))
const { getAllEvents } = require(path.join(__dirname, '../', 'database', 'functions.js'))
const allEvents = getAllEvents()
const { main: managerEvents } = require(path.join(__dirname, '../', 'utils', 'managerEvents.js'))
const { main: setTray } = require(path.join(__dirname, 'tray.js'))

app.name = 'Count Timer'

app.whenReady().then(() => {
  startServer()
  setTray()
  managerEvents(allEvents)

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      worker()
    }
  })
})

app.on('window-all-closed', () => {
  app.relaunch()
  app.quit()
})
