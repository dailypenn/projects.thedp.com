// Smooth anchor scrolling
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// });

mapboxgl.accessToken = 'pk.eyJ1IjoiZHB3ZWJkZXYiLCJhIjoiY2pmYmN2dDB4MWNoYjRlcTdjM2Y3bGpzZyJ9.1m44PhD4VmqEhKhI4FhPKA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dpwebdev/cjfbcjxzi69w52rk936tb9lyu',
  center: [-75.192, 39.951],
  zoom: 13,
  scrollZoom: false
});

map.addControl(new mapboxgl.NavigationControl());

$("#pollLoc").on("click", function(e) {
  getLocation();
})

$("#address").keydown(function(event) {
  if (event.keyCode == 13) {
    getLocation();
  }
});

function getLocation() {
  var appended = 0;
  var htmlAddr = $("#address").val().split(' ').join('+');
  if (htmlAddr.length < 22) {
    htmlAddr = htmlAddr + ",+Philadelphia,+PA+19104"
    appended = 1;
  }
  // First put their address on the map
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + htmlAddr.split(' ').join('+') + "&key=AIzaSyDEnLZ0Zlt1qpAmlgXwYezsgGkUWSK57Yo", function(data) {
    if (typeof data.results[0] == 'undefined') {
      alert("Uh oh, we couldn't find your home. Try being more specific.")
      return
    }
    var homeLat = data.results[0].geometry.location.lat;
    var homeLon = data.results[0].geometry.location.lng;

    var popup = new mapboxgl.Popup().setLngLat([homeLat, homeLon]).setHTML("Your Home").addTo(map)

    // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat([homeLat, homeLon])
  .setPopup(popup)
  .addTo(map);
    // map.setCenter([homeLat, homeLon], 15);

  }).error(function(){

    alert("Uh oh, we couldn't find your home. Try being more specific.")
    return
  });

  // then get their polling place
  // *** remember to update the test electionId (2000) to the real ID! (should be 6000 for the midterm elections) ***
  // $.getJSON("https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + htmlAddr + "&electionId=2000&key=AIzaSyDEnLZ0Zlt1qpAmlgXwYezsgGkUWSK57Yo", function( data ) {
  //   if (typeof data.pollingLocations == 'undefined') {
  //     if (appended) {
  //       alert("Uh oh, we couldn't find your home. Try being more specific.")
  //     } else {
  //       alert("We can't find your polling place. Try again, or visit your local board's website for more information.")
  //     }
  //     return
  //   }
  //   var pollingPlace = data.pollingLocations[0];
  //   var pollAddr = pollingPlace.address.line1 + pollingPlace.address.city + ", " + pollingPlace.address.state;
  //   pollAddr = pollAddr.replace("&", "AND");
  //
  //   // geocode polling place location and place on map
  //   $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+pollAddr.split(' ').join('+') + "&key=AIzaSyDEnLZ0Zlt1qpAmlgXwYezsgGkUWSK57Yo", function(data) {
  //     var lat = data.results[0].geometry.location.lat;
  //     var lon = data.results[0].geometry.location.lng;
  //
  //     var popup = new mapboxgl.Popup().setLngLat([lat, lon]).setHTML('<b>'+ data.results[0].formatted_address +'</b>').addTo(map)
  //
  //     // create a HTML element for each feature
  //   var el = document.createElement('div');
  //   el.className = 'marker';
  //
  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el)
  //   .setLngLat([lat, lon])
  //   .setPopup(popup)
  //   .addTo(map);
    // map.setCenter([lat, lon], 15);

  //   })
  // }).error(function(){
  //   alert("We can't find your polling place! Try again, or visit your local board's website for more information.")
  //   return
  // });

}

// map.addControl(new mapboxgl.NavigationControl());
