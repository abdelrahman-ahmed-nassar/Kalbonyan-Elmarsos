// using third-part library called leaflet

// you can go to the website and see how to display a map with coordinates

//------------- Display a map  [leaflet] -------------
// L is a namespace (global variable) for Leaflet that have a lot of methods that we can use
// we access variables from other js files [only if it before our file in html file]
const map = L.map("is-of-the-element-where-the-map-will-displayed").setView(
  [51.505, -0.09], // the current coordinates of the map [latitude, longitude]
  13 // the zoom level of the map
);

// we use the tile layer to display the map
// can change the style of the map by changing the url
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// display a marker on the map
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
