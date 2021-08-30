/* eslint-disable import/no-extraneous-dependencies */
const {
  app, BrowserWindow, Menu, Tray,
} = require('electron');
const path = require('path');

let tray = null;

function createWindow(route) {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    icon: path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', '256x256.png'),
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
    },
  });

  win.loadURL(`http://localhost:7676/${route}`);
}

function main() {
  tray = new Tray(path.join(__dirname, '../', '../', 'public', 'images', 'icons-png', 'logo.png'));

  const mainMenu = Menu.buildFromTemplate([
    {
      label: 'Create event',
      type: 'normal',
      click: () => {
        createWindow('create-event');
      },
    },
    {
      label: 'Events',
      type: 'normal',
      click: () => {
        createWindow('events');
      },
    },
    { type: 'separator' },
    {
      label: 'Shut down Count Timer',
      type: 'normal',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip('This is my application.');
  tray.setContextMenu(mainMenu);
}

module.exports = { main };
