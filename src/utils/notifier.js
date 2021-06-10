// eslint-disable-next-line import/no-extraneous-dependencies
const { Notification } = require('electron');
const path = require('path');

function notifier({ title, body, icon }) {
  const newNotification = {
    title,
    body,
    icon,
  };

  new Notification(newNotification).show();
}

module.exports = { notifier };
