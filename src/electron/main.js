const { app, BrowserWindow, Tray, Menu } = require('electron')
const path = require('path')
const startServer = require(path.join(__dirname, '../', 'app.js'))
const { getAllEvents } = require(path.join(__dirname, '../', 'database', 'functions.js'))
const allEvents = getAllEvents()
const { main: managerEvents } = require(path.join(__dirname, '../', 'utils', 'managerEvents.js'))

function createWindow() {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    icon: path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', '256x256.png'),
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    }
  })

  win.loadURL('http://localhost:3000/')
}

app.name = 'Count Timer'

app.whenReady().then(() => {
  startServer()
  managerEvents(allEvents)
  // createWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
