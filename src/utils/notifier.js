// eslint-disable-next-line import/no-extraneous-dependencies
const { Notification } = require('electron');
const path = require('path');

function notifier({ title, body, icon }) {
  const newNotification = {
    title,
    body,
    icon,
    sound: `${path.join(__dirname, '../', '../', 'public', 'audio', 'notification-sound.mp3')}`,
    urgency: 'critical',
  };

  new Notification(newNotification).show();
}

module.exports = { notifier };
