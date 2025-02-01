// Store our API endpoint as queryUrl.
let plateQueryUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json"
let plates = new L.layerGroup();

// Perform a GET request to the query URL/
d3.json(plateQueryUrl).then(function (plateData) {

  // Create a GeoJSON layer that contains the features array on the tectonicPlate object.
  // Run the onEachFeature function once for each piece of data in the array.
L.geoJSON(plateData, {
    onEachFeature: onEachFeature
  }).addTo(plates);
});

let overlayMaps = {
  TectonicPlates: plates
};

l.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

function onEachFeature(feature, layer) {
  layer.bindPopup(`<h3>${feature.properties.Code}</h3><hr><p>${(feature.properties.PlateName)}</p>`);
};

  // Send the techtonic plate layer to the createMap function
//

// function createMap(tectonicPlates) {

//   // Create the base layers.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   });

//    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//    });

//    var sat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

//   // Create a baseMaps object.
//   var baseMaps = {
//     "Street Map": street,
//     "Topographic Map": topo,
//     "Satellite": sat
//   };

//   // Create an overlay object to hold our overlay.
//   var overlayMaps = {
//     "Tectonic Plates": tectonicPlates
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load.
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [street, tectonicPlates]
//   });

//   // Create a layer control.
//   // Pass it our baseMaps and overlayMaps.
//   // Add the layer control to the map.
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// };