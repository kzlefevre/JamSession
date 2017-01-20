L.mapbox.accessToken = 'pk.eyJ1Ijoia3psZWZldnJlIiwiYSI6ImNpeTF2dWd3MjAwMDMyd21udnE5bmZnMWEifQ.oY5cihk-6ZUF56AsmWVkPw';

var mapToggle = L.mapbox.map('map-toggle')
  .setView([38.9, -77], 11)
  .addLayer(L.mapbox.tileLayer('mapbox.light'));

var filters = document.getElementById('filters');

var markers = L.mapbox.featureLayer().loadURL('/help/data/examples/dc-weekend-picks.geojson');

markers.on('ready', function(e) {
  var typesObj = {},
    types = [];
  var features = e.target._geojson.features;
  for (var i = 0; i < features.length; i++) {
    typesObj[features[i].properties['marker-symbol']] = true;
  }
  for (var key in typesObj) {
    if ({}.hasOwnProperty.call(typesObj, key)) {
      types.push(key);
    }
  }
  var checkboxes = [];
  for (var j = 0; j < types.length; j++) {
    var item = filters.appendChild(document.createElement('div'));
    var checkbox = item.appendChild(document.createElement('input'));
    var label = item.appendChild(document.createElement('label'));
    checkbox.type = 'checkbox';
    checkbox.id = types[j];
    checkbox.checked = true;
    label.innerHTML = types[j];
    label.setAttribute('for', types[j]);
    checkbox.addEventListener('change', update);
    checkboxes.push(checkbox);
  }

  function update() {
    var enabled = {};
    for (var k = 0; k < checkboxes.length; k++) {
      if (checkboxes[k].checked) enabled[checkboxes[k].id] = true;
    }
    markers.setFilter(function(feature) {
      return feature.properties['marker-symbol'] in enabled;
    });
  }
}).addTo(mapToggle);
mapToggle.scrollWheelZoom.disable();

L.mapbox.accessToken = 'pk.eyJ1Ijoia3psZWZldnJlIiwiYSI6ImNpeTF2dWd3MjAwMDMyd21udnE5bmZnMWEifQ.oY5cihk-6ZUF56AsmWVkPw';
var mapCluster = L.mapbox.map('map-cluster')
  .setView([38.9, -77], 11)
  .addLayer(L.mapbox.tileLayer('mapbox.light'));
L.mapbox.featureLayer()
  .loadURL('/help/data/examples/stations.geojson')
  .on('ready', function(e) {
    var clusterGroup = new L.MarkerClusterGroup();
    e.target.eachLayer(function(layer) {
      clusterGroup.addLayer(layer);
    });
    mapCluster.addLayer(clusterGroup);
  });
mapCluster.scrollWheelZoom.disable();
