let map;
let marker;
let watchID;
let geoLoc;

function showLocationOnMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  const coord = { lat: latitude, lng: longitude };
  marker.setPosition(coord);
  map.setCenter(coord);
}

function getPosition() {
  if (navigator.geolocation) {
    var options = { timeout: 60000 };
    geoLoc = navigator.geolocation;
    watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options);
  } else {
    alert("Your browser doesn't support geolocation");
  }
}

function errorHandler(err) {
  if (err.code == 1) {
    alert("Error: negated access");
  } else if (err.code == 2) {
    alert("Error: position doesn't exist");
  }
}

function initMap() {
  const coord = { lat: -34.5956145, lng: -58.4431949 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });

  marker = new google.maps.Marker({
    position: coord,
    map: map,
  });

  console.log("Connection Succesfully - Google Maps");
  getPosition();
}
