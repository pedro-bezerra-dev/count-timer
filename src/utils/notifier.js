const { Notification } = require('electron')

function notifier({ title, body, icon}) {

  const newNotification = {
    title,
    body,
    icon
  }

  new Notification(newNotification).show()
}

export { notifier };
