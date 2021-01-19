// Toast Notifications
function toasty00() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            var notify = new Notification('Sample Title', {
                body: 'This is a sample toast notification, sent via JavaScript.',
                icon: 'https://WebAppTesting.elburg.repl.co/res/img/information.png',
            });
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('Sample Title', {
                        body: 'This is a sample toast notification, sent via JavaScript.',
                        icon: 'https://WebAppTesting.elburg.repl.co/res/img/information.png',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}
function toasty01() {
  const notification = new Notification("Sample Title", {
      body: "This is a sample toast notification, sent via JavaScript. The difference between this and the first notification test is that this generates the notification in a different method than the first one.",
      icon: 'https://WebAppTesting.elburg.repl.co/res/img/information.png'
  })
}