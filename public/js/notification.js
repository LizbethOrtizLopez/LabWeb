function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Estamos atendiendo tu solicitud, toma refugio mientras llega la ambulancia");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            const notification = new Notification("Estamos atendiendo tu solicitud, toma refugio mientras llega la ambulancia");
            // …
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  function change() {
    var title = document.getElementById("title__map");
    title.innerHTML = "Espera a que llegue la ambulancia, toma refugio"
  }