import { saveRescue } from "./firebase";

const button__map = document.getElementById("button__map");

button__map.addEventListener("click", (e) => {
  e.preventDefault();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
    
      saveRescue(date, time, lat, long);
    });
  }
});
