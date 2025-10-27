const API_KEY = "AIzaSyBzaDXE_CFHiVY5BYuoEZbJ6ZZVYRj7vnc";

let map;
let infoWindow;
let userPos = null;
let markers = [];
let selectedStops = []; // <-- store clicked markers
let directionsService;
let directionsRenderer;
var location = [];
/**
 * Creates and loads the map, sets the user position and creates a search bar and button
 */
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
  // Created the InfoWindow that will be used to show information about the location
  infoWindow = new google.maps.InfoWindow();
  // Directions setup
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map });
  // Checks to see if the user has enabled their location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Sets the user location to a variable and then puts a pin/infoWindow on the map at their current location
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
  // created the search bar and the button in the top left of the map
  const textInput = document.getElementById("text-input");
  const textBtn = document.getElementById("text-input-button");
  const card = document.getElementById("text-input-card");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  textBtn.addEventListener("click", () => findPlaces(textInput.value));
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") findPlaces(textInput.value);
  });
}
/**
 * Checks to see if the user has enabled their geolocation,
 * If the user does not have the location enabled then the infoWindow will show an error
 */
function handleLocationError(browserHasGeolocation, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Please Enable your location"
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
/**
 * Removes any markers already loaded on the map
 */
function clearMarkers() {
  markers.forEach((m) => (m.map = null));
  markers = [];
}
/**
 * Uses the input from the user to search for locations near by and adds it to the table
 */
async function findPlaces(query) {
  if (!query) return;
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { LatLngBounds } = await google.maps.importLibrary("core");
  clearMarkers();
  infoWindow.close();
  const request = {
    textQuery: query,
    fields: [
      "id",
      "displayName",
      "formattedAddress",
      "location",
      "businessStatus",
    ],
    // Moved the map over the users positions and loads a maximum of 8 markers
    locationBias: userPos || map.getCenter(),
    language: "en-GB",
    region: "GB",
    maxResultCount: 8,
  };
  const { places } = await Place.searchByText(request);
  if (!places || !places.length) {
    return;
  }
  // Puts a marker on each of the locations that have been found
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
      updateInfoWindow(
        place.displayName,
        `<div>Added ${place.displayName} to your trip!</div>`,
        marker,
        place
      );
      var name = "";
      // Gets the Name and address of the clicked marker
      name = `${place.displayName}`;
      let street = `${place.formattedAddress}`;
      let row = document.getElementById("locations").insertRow(-1); // Inserts a new row to the route planner table
      row.insertCell(0).innerHTML = name; // use one cell for the name another for the street and postcode
      row.insertCell(1).innerHTML = street;
    });
    bounds.extend(place.location);
  });
  map.fitBounds(bounds);
  if (places.length === 1) map.setZoom(Math.max(map.getZoom(), 14));
}
/**
 * Creates the infoWindow and sets information about the selected area
 */
function updateInfoWindow(title, html, anchor, place) {
  infoWindow.setHeaderContent(title);
  infoWindow.setContent(html);
  infoWindow.open({ map, anchor });
  // Sets the User location to the most recently clicked marker
  userPos = place.location;
}
/**
 * shows the direction from one place to another
 */
function showDirections(destination) {
  // checks if there is a user position
  if (!userPos) {
    return;
  }
  // Creates the route from the userPos to the destination
  // The destination is the most recently clicked marker
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
      }
    }
  );
}
initMap();
