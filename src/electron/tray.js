const { Menu, Tray } = require('electron')
const path = require('path')

function main() {
  const tray = new Tray(path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', 'logo.png'))
  const mainMenu = Menu.buildFromTemplate([
    { label: 'Create event', type: 'normal'},
    { label: 'Events', type: 'normal'},
    { type: 'separator' },
    { label: 'Open Count Timer', type: 'normal'},
    { label: 'Shut down Count Timer', type: 'normal'}
  ])

  tray.setToolTip('This is my application.')
  tray.setContextMenu(mainMenu)
}

module.exports = { main }
