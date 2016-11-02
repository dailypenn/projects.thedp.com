L.mapbox.accessToken = 'pk.eyJ1IjoiZHB3ZWJkZXYiLCJhIjoiY2lrYTdvZnU0MGpiOXYwa3BwbjA0bGJrciJ9.5wK50SNw_NQaODLWOHOboA';
var map = L.mapbox.map('map', 'mapbox.light').setView([39.951, -75.192], 14);
var styleLayer = L.mapbox.styleLayer('mapbox://styles/dpwebdev/ciuxcndkc00fl2js5nxo7jzt2').addTo(map);

$("#pollLoc").on("click", function(e) {
  getLocation();
})

function getLocation() {
  var htmlAddr = $("#address").val().replace(" ", "+");
  $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+htmlAddr, function(data) {
    var lat = data.results[0].geometry.location.lat;
    var lon = data.results[0].geometry.location.lng;
    showPosition(lat, lon);
  })
//
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    // } else {
    //     alert("Geolocation is not supported by this browser.");
    // }
}

function showPosition(lat, lon) {
  L.marker([lat, lon], {
    icon: L.mapbox.marker.icon({
      'marker-size': 'medium',
      'marker-symbol': 'lodging',
      'marker-color': '#aa1e22'
    })
  }).addTo(map);

  $.getJSON("http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/22/query?geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnCountOnly=false&returnIdsOnly=false&returnGeometry=false&outFields=DIVISION_NUM&f=pjson&geometry=%7B%22x%22%3A" + lon + "%2C%22y%22%3A" + lat + "%7D", function( data ) {
    var DIVISION_NUM = data.features[0].attributes.DIVISION_NUM;
    var ward = DIVISION_NUM.substring(0,2);
    var division = DIVISION_NUM.substring(2,4);
    $.getJSON("http://api.phila.gov/polling-places/v1/?ward=" + ward + "&division=" + division, function( data ) {
      console.log(data);
      var pollData = data.features[0].attributes
      var pollingLat = pollData.lat;
      var pollingLon = pollData.lng;
      L.marker([pollingLat, pollingLon], {
        icon: L.mapbox.marker.icon({
          'marker-size': 'large',
          'marker-symbol': 'polling-place',
          'marker-color': '#aa1e22'
        })
      }).addTo(map);
      map.flyTo({center: pollingLat, pollingLon});
    });
  });
}
