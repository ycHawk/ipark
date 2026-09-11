const options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0,
};

const currentPositionElement = document.getElementById("current-position");

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude: ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  if (currentPositionElement) {
    currentPositionElement.textContent = `Latitude: ${crd.latitude}, Longitude: ${crd.longitude} (Accuracy: ${crd.accuracy} meters)`;
  }
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);