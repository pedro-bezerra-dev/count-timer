async function checkPermission() {
  if(Notification.permission !== 'granted') {
    const permission = await Notification.requestPermission()

    setTimeout(async () => {
      if(Notification.permission == 'granted') {
        const newNotification = new Notification('Thanks!', {
          body: 'We will let you know when your events arrive.',
          icon: '/public/images/logo.svg'
        })

        return
      } 
      if(permission !== 'granted') {
        alert('For the App to work we need you to give us permission to send you notifications')
        const repeatPermission = await Notification.requestPermission()
        
        setTimeout(() => {
          if(Notification.permission == 'granted') {
            const newNotification = new Notification('Thanks!', {
              body: 'We will let you know when your events arrive.',
              icon: '/public/images/logo.svg'
            })
          } else {
            alert('The App will only start to warn you when you are allowed to send notifications')
          }
        }, 3000)
      }
    }, 3000)
  }
}
