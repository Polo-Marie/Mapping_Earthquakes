// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [37.6213, -122.3790],
    zoom: 5
});

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1974292, -97.6663058],
  [43.67771760000001, -79.62481969999999],
  [40.644119, -73.781967],
  [30.1974292, -97.6663058]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
});

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
}).addTo(map);
    
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);