
function createMap(earthquakes) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        zoomOffset: -1,
        accessToken: API_KEY
    }).addTo(map);
// create basemaps object to hold 
    var baseMaps = {
        "Light Map": lightmap
    };
// create overlaymaps object for earthquakes
    var overlayMaps = {
        "Earthquakes": earthquakes
    };
// map object
    var map = L.map("map", {
        center: [40.73, 0],
        zoom: 12,
        layers: [lightmap, earthquakes]
    });
// create layer control for basemaps and overlaymaps
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);

}

function createMarkers(response) {

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", createMarkers);
