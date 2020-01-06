/* global $*/
window.initMap = function () {
    const tag = $('#tags');
    
    'use strict';

       let loc = { lat: 0, lng: 0 };

       let map = new google.maps.Map(document.getElementById('map'), {
           center: loc,
          zoom: 3,
      });
    $('#mark').click(() => {
        fetch(`http://api.geonames.org/wikipediaSearch?q=${tag.val()}&maxRows=10&username=???&type=json`)
            .then(response => {
                return response.json();
            })
            .then(response => { 
                console.log(response);
                loc.lat = response.geonames[0].lat;
               loc.lng = response.geonames[0].lng;
                 let marker = new google.maps.Marker({
                  position: loc,
                  map: map,
                  title: `${response.geonames[0].title}`
              });
              const infoWindow = new google.maps.InfoWindow();
      
              marker.addListener('click', () => {
                  infoWindow.setContent(`${response.geonames[0].summary}`);
                  infoWindow.open(map, marker);
              });
            })

    });
};

