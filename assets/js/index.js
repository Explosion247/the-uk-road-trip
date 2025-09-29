const API_KEY = "AIzaSyBzaDXE_CFHiVY5BYuoEZbJ6ZZVYRj7vnc";
let map;
let markers = {};
let infoWindow;

// initiate the map
async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const myLatlng = { lat: -25.363, lng: 131.044 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatlng,
    mapId: "DEMO_MAP_ID",
  });

  // const marker = new google.maps.marker.AdvancedMarkerElement({
  //   position: myLatlng,
  //   map,
  //   title: "Click to zoom",
  // });
  // sets the location to the users current location
  let infoWindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Your current Location");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // map.addListener("center_changed", () => {
  //   // 3 seconds after the center of the map has changed, pan back to the
  //   // marker.
  //   window.setTimeout(() => {
  //     map.panTo(marker.position);
  //   }, 3000);
  // });
  // marker.addListener("click", () => {
  //   map.setZoom(8);
  //   map.setCenter(marker.position);
  // });

  const textInput = document.getElementById("text-input");
  const textInputButton = document.getElementById("text-input-button");
  const card = document.getElementById("text-input-card");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  textInputButton.addEventListener("click", () => {
    findPlaces(textInput.value);
  });
  textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      findPlaces(textInput.value);
    }
  });
}
// function to handle no Geolocation
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
async function findPlaces(query) {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const request = {
    textQuery: query,
    fields: ["displayName", "location", "businessStatus"],
    includedType: "",
    locationBias: { lat: -25.363, lng: 131.044 },
    isOpenNow: true,
    language: "en-GB",
    maxResultCount: 8,
    minRating: 3.2,
    region: "GB",
    useStrictTypeFiltering: false,
  };
  //@ts-ignore
  const { places } = await Place.searchByText(request);

  if (places.length) {
    console.log(places);

    const { LatLngBounds } = await google.maps.importLibrary("core");
    const bounds = new LatLngBounds();

    // Loop through and get all the results.
    places.forEach((place) => {
      const marker = new AdvancedMarkerElement({
        map,
        position: place.location,
        title: place.displayName,
      });
      markers[place.id] = marker;
      marker.addListener("gmp-click", () => {
        map.panTo(place.location);
        updateInfoWindow(place.displayName, place.id, marker);
      });
      if (place.location != null) {
        bounds.extend(place.location);
        console.log(place);
      }
    });
    console.log(`bounds ${bounds}`);
    map.fitBounds(bounds);
  } else {
    console.log("No results");
  }
}
async function updateInfoWindow(title, content, anchor) {
  infoWindow.setContent(content);
  infoWindow.setHeaderContent(title);
  infoWindow.open({
    map,
    anchor,
    shouldFocus: false,
  });
}
initMap();
