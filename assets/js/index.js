const API_KEY = "AIzaSyBzaDXE_CFHiVY5BYuoEZbJ6ZZVYRj7vnc";

// let map;
// let infoWindow;
// let userPos = null;
// let markers = [];
// // ---- init ---------------------------------------------------
// async function initMap() {
//   // load needed libs
//   await google.maps.importLibrary("maps");
//   await google.maps.importLibrary("marker");
//   // sensible UK fallback centre
//   const ukCentre = { lat: 54.0, lng: -2.0 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 6,
//     center: ukCentre,
//     mapId: "DEMO_MAP_ID", // keep only if you actually have this Map ID set up
//     gestureHandling: "greedy",
//   });
//   // one global infoWindow reused for all markers
//   infoWindow = new google.maps.InfoWindow();
//   // try geolocation so searches bias to the user
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         userPos = {
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         };
//         map.setCenter(userPos);
//         infoWindow.setPosition(userPos);
//         infoWindow.setContent("Your current location");
//         infoWindow.open(map);
//       },
//       () => handleLocationError(true, map.getCenter())
//     );
//   } else {
//     handleLocationError(false, map.getCenter());
//   }
//   // search UI
//   const textInput = document.getElementById("text-input");
//   const textBtn = document.getElementById("text-input-button");
//   const card = document.getElementById("text-input-card");
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
//   textBtn.addEventListener("click", () => findPlaces(textInput.value));
//   textInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") findPlaces(textInput.value);
//   });
// }
// // ---- helpers ------------------------------------------------
// function handleLocationError(browserHasGeolocation, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }
// function clearMarkers() {
//   markers.forEach((m) => (m.map = null));
//   markers = [];
// }
// // ---- search -------------------------------------------------
// async function findPlaces(query) {
//   if (!query) return;
//   const { Place } = await google.maps.importLibrary("places");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//   const { LatLngBounds } = await google.maps.importLibrary("core");
//   clearMarkers();
//   infoWindow.close();
//   const request = {
//     textQuery: query,
//     // you were using place.id but not requesting it -> add "id"
//     fields: ["id", "displayName", "location", "businessStatus"],
//     // bias results to user location or current map centre
//     locationBias: userPos || map.getCenter(),
//     language: "en-GB",
//     region: "GB",
//     maxResultCount: 8,
//     useStrictTypeFiltering: false,
//   };
//   // @ts-ignore
//   const { places } = await Place.searchByText(request);
//   if (!places || !places.length) {
//     console.log("No results");
//     return;
//   }
//   const bounds = new LatLngBounds();
//   places.forEach((place) => {
//     if (!place.location) return;
//     const marker = new AdvancedMarkerElement({
//       map,
//       position: place.location,
//       title: place.displayName,
//     });
//     markers.push(marker);
//     marker.addListener("gmp-click", () => {
//       map.panTo(place.location);
//       updateInfoWindow(
//         place.displayName,
//         `<div>${place.displayName}</div>`,
//         marker
//       );
//     });
//     bounds.extend(place.location);
//   });
//   // Fit the map to the results; if only one result, zoom in a bit
//   map.fitBounds(bounds);
//   if (places.length === 1) {
//     map.setZoom(Math.max(map.getZoom(), 14));
//   }
// }
// // ---- infowindow ---------------------------------------------
// function updateInfoWindow(title, html, anchor) {
//   infoWindow.setHeaderContent(title);
//   infoWindow.setContent(html);
//   infoWindow.open({ map, anchor, shouldFocus: false });
// }
// // kick off
// initMap();
let map;
let infoWindow;
let userPos = null;
let markers = [];
let selectedStops = []; // <-- store clicked markers
let directionsService;
let directionsRenderer;
var location = [];
let p = 0;

async function initMap() {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");
  const ukCentre = { lat: 54.0, lng: -2.0 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: ukCentre,
    mapId: "YOUR_REAL_MAP_ID",
    gestureHandling: "greedy",
  });
  infoWindow = new google.maps.InfoWindow();
  // Directions setup
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        map.setCenter(userPos);
        infoWindow.setPosition(userPos);
        infoWindow.setContent("Your current location");
        infoWindow.open(map);
      },
      () => handleLocationError(true, map.getCenter())
    );
  } else {
    handleLocationError(false, map.getCenter());
  }
  const textInput = document.getElementById("text-input");
  const textBtn = document.getElementById("text-input-button");
  const card = document.getElementById("text-input-card");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  textBtn.addEventListener("click", () => findPlaces(textInput.value));
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") findPlaces(textInput.value);
  });
}
function handleLocationError(browserHasGeolocation, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
function clearMarkers() {
  markers.forEach((m) => (m.map = null));
  markers = [];
}
async function findPlaces(query) {
  if (!query) return;
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { LatLngBounds } = await google.maps.importLibrary("core");
  clearMarkers();
  infoWindow.close();
  const request = {
    textQuery: query,
    fields: ["id", "displayName", "location", "businessStatus"],
    locationBias: userPos || map.getCenter(),
    language: "en-GB",
    region: "GB",
    maxResultCount: 8,
  };
  // @ts-ignore
  const { places } = await Place.searchByText(request);
  if (!places || !places.length) {
    console.log("No results");
    return;
  }
  const bounds = new LatLngBounds();
  places.forEach((place) => {
    if (!place.location) return;
    const marker = new AdvancedMarkerElement({
      map,
      position: place.location,
      title: place.displayName,
    });
    markers.push(marker);
    // When clicked: add to selectedStops + draw directions
    marker.addListener("gmp-click", () => {
      selectedStops.push(place); // save it
      showDirections(place.location); // draw route
      console.log(`display Name = ${place.displayName}`);
      updateInfoWindow(
        place.displayName,
        `<div>Added ${place.displayName} to your trip!</div>`,
        marker
      );
      var outputHTML = "";
      //keeps deleting the outputHTML and replaces it with multiple of the last clicked area
      //https://stackoverflow.com/questions/71349510/how-to-display-javascript-variable-values-in-a-table
      location[p] = place.displayName;
      p = p + 1;
      console.log(`location length = ${location.length}`);
      for (let i = 0; i < location.length; i++) {
        outputHTML += "<tr><td>" + place.displayName + "</td></tr>";
      }
      document.getElementById("locations").innerHTML = outputHTML;
    });
    bounds.extend(place.location);
  });
  map.fitBounds(bounds);
  if (places.length === 1) map.setZoom(Math.max(map.getZoom(), 14));
}
function updateInfoWindow(title, html, anchor) {
  infoWindow.setHeaderContent(title);
  infoWindow.setContent(html);
  infoWindow.open({ map, anchor });
}
function showDirections(destination) {
  if (!userPos) {
    console.warn("No user location yet.");
    return;
  }
  //change the userPos to the LatLng of the previously clicked location, get the duration
  directionsService.route(
    {
      origin: userPos,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      } else {
        console.error("Directions request failed:", status);
      }
      console.log(result);
    }
  );
}
initMap();
