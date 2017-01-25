// Global map object
var map;

// Initialize map function
function initialize() {

    // Starter map options
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.01499, -105.27055),
        scrollwheel: false,
    };

    // Create the map using the maps api
    map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

    // Listen for click events on the map...
    google.maps.event.addListener(map, 'click', function(e) {

        // Generate a marker at the click location
        var marker = new google.maps.Marker({
            position: e.latLng,
            map: map
        });

        // Listen for clicks on the new marker,
        // and delete it if detected
        google.maps.event.addDomListener(marker, 'click', function(){
            marker.setMap(null);
            marker = null;
        });
    });
}

// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }




// {
//   "type": "Feature",
//   "properties": {
//     "firstname": "Kevin",
//     "instrument": "guitar",
//     "email": "kevin.lefevre@gmail.com",
//     "genre": "bluegrass"
//   },
//   "geometry": {
//     "coordinates": [
//       -105.08523,
//       40.54228
//     ],
//     "type": "Point"
//   }
// }


// On window load, initialize the map
// google.maps.event.addDomListener(window, 'load', initialize);
