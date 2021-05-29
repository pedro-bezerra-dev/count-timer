/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const { app } = require('electron');
const path = require('path');

const startServer = require(path.join(__dirname, '../', 'app.js'));
const { getAllEvents } = require(path.join(__dirname, '../', 'database', 'functions.js'));
const allEvents = getAllEvents();
const { main: managerEvents } = require(path.join(__dirname, '../', 'utils', 'managerEvents.js'));
const { main: setTray } = require(path.join(__dirname, 'tray.js'));
const AutoLaunch = require('auto-launch');

app.name = 'Count Timer';

if (process.platform === 'darwin') {
  app.dock.hide();
}

if (process.platform === 'win32' || process.platform === 'darwin') {
  app.setLoginItemSettings({ openAtLogin: true });
}

if (process.platform === 'linux') {
  const autoLaunch = new AutoLaunch({
    name: 'Count Timer',
  });

  autoLaunch.enable();
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) {
      autoLaunch.enable();
    }
  });
}

app.whenReady().then(() => {
  startServer();
  setTray();
  managerEvents(allEvents);
});

app.on('window-all-closed', () => {
  app.relaunch();
  app.quit();
});
