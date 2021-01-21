// Used only for webpage specific scripts.
function youcannotescape() {
  alert("how bout...\n\n\n\n\nno escape")
  alert("how bout...\n\n\n\n\nno escape")
  alert("how bout...\n\n\n\n\nno escape")
  alert("how bout...\n\n\n\n\nno escape")
  alert("how bout...\n\n\n\n\nno escape")
  alert("how bout...\n\n\n\n\nno escape")
  // toast here
  notifyMe()
}
function notifyMe() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            var notify = new Notification('i told you...', {
                body: "You can\'t escape here",
                icon: 'res/img/information.png',
            });
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('i told you...', {
                        body: "You can\'t escape here",
                        icon: 'res/img/information.png',
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