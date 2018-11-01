// create map
mapboxgl.accessToken = 'pk.eyJ1IjoiZHB3ZWJkZXYiLCJhIjoiY2pmYmN2dDB4MWNoYjRlcTdjM2Y3bGpzZyJ9.1m44PhD4VmqEhKhI4FhPKA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dpwebdev/ciuxcndkc00fl2js5nxo7jzt2',
  center: [-75.192, 39.951],
  zoom: 14,
  scrollZoom: false
});

map.addControl(new mapboxgl.NavigationControl());

const markers = [];
const popups = [];
const API_KEY = 'AIzaSyDEnLZ0Zlt1qpAmlgXwYezsgGkUWSK57Yo';

// getJSON function so we don't have to import jQuery
const getJSON = (url, callback) => {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      const data = JSON.parse(xmlhttp.responseText);
      callback(data);
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

const getLocation = () => {
  // remove all markers and popups before displaying the new one
  markers.forEach(el => {
    el.remove();
  });
  popups.forEach(el => {
    el.remove();
  });

  // add their home address to the map
  const city = document.getElementById('city').value;
  const address = `${document.getElementById('address').value} ${city || 'Philadelphia'}`;

  getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.split(' ').join('+')}&key=${API_KEY}`, data => {
    // FIXME: alerts are bad
    if (!data.results[0]) {
      alert("Uh oh, we couldn't find your home. Try being more specific.");
      return;
    }

    const formatted_address = data.results[0].formatted_address;
    const location = data.results[0].geometry.location;
    const coordinates = [location.lng, location.lat];
    const div = document.createElement('div');
    div.className = 'marker';
    const marker = new mapboxgl.Marker(div)
      .setLngLat(coordinates)
      .addTo(map);
    markers.push(marker);

    // then get their polling place
    // *** remember to update the test electionId (2000) to the real ID! (should be 6000 for the midterm elections) ***
    getJSON(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=${formatted_address.split(' ').join('+')}&electionId=6000&key=${API_KEY}`, data => {
      // FIXME: alerts are bad
      if (!data.pollingLocations) {
        alert("We can't find your polling place. Try again, or visit your local board's website for more information.");
        return;
      }

      const pollingPlace = data.pollingLocations[0];
      const pollAddress = `${pollingPlace.address.line1} ${pollingPlace.address.city}, ${pollingPlace.address.state}`.replace('&', 'AND');

      // geocode polling place location and place on map
      getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${pollAddress.split(' ').join('+')}&key=${API_KEY}`, data => {
        const location = data.results[0].geometry.location;
        const coordinates = [location.lng, location.lat];
        const div = document.createElement('div');
        div.className = 'marker poll';
        const marker = new mapboxgl.Marker(div)
          .setLngLat(coordinates)
          .addTo(map);
        const popup = new mapboxgl.Popup({ offset: 10, closeOnClick: false, closeButton: false })
          .setLngLat(coordinates)
          .setHTML(`<h4>Your Polling Location:</h4>${data.results[0].formatted_address}`)
          .addTo(map);

        markers.push(marker);
        popups.push(popup);

        map.setCenter(coordinates);
        map.setZoom(15);
      });
    });
  });
}

// handle searching
document.getElementById('search').addEventListener('submit', e => {
  // prevent the form from reloading the page
  e.preventDefault();
  getLocation();
});
