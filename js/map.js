var ol = require('openlayers');
var latLng = [];
var mapCount = 0;

exports.initialize = function() {
  mapCount =+ 1;
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [0,0],
      zoom: 5
    })
  });
}

exports.setMapLocation = function (coords) {
var webMercator = ol.proj.fromLonLat(coords);
map = new ol.Map({
  target: 'map' + mapCount,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: webMercator,
    zoom: 5
  });
}

exports.addClouds = function() {
  var layer_cloud = new OpenLayers.Layer.XYZ(
    "clouds",
    "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png",
    {
      isBaseLayer: false,
      opacity: 0.7,
      sphericalMercator: true
    }
  );
  map.addLayers([mapnik, layer_cloud]);
}

exports.addPrecipitation = function() {
  var layer_precipitation = new OpenLayers.Layer.XYZ(
    "precipitation",
    "http://${s}.tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png",
    {
      isBaseLayer: false,
      opacity: 0.7,
      sphericalMercator: true
    }
  );
  map.addLayers([mapnik, layer_precipitation]);
}
