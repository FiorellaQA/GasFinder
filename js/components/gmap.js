'use strict';
const init = (parent) =>{
    const map = new GMaps({
        el: parent,
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long
    });

    map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        zoom: 13
    });

    GMaps.geolocate({
        success: function(position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
            map.setZoom(11);

            map.addMarker({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });

            map.drawRoute({
                origin: [position.coords.latitude, position.coords.longitude],
                destination: [state.selectedStation.lat, state.selectedStation.long],
                travelMode: 'driving',
                strokeColor: '#FF00FF',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });
        },
        error: function(error) {
            alert('Geolocation failed: '+error.message);
        },
        not_supported: function() {
            alert("Your browser does not support geolocation");
        }
    });

}

const Gmap = _=>{
    const containerMap = $("<div id='map'></div>");
    containerMap.init = init.bind(null,containerMap.get(0));

    return containerMap;
};