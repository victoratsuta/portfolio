path = window.location.href.split('/');
path = path[3].split('#');

if(typeof  path[1] != 'undefined'){
    history.replaceState('', "page 3", "portfolio");
}
if (path[0]=='contacts'){
    Loading('hide_logo');
    SVGMenu('contact');
    var mymap = L.map('mapid',{ zoomControl:false }).setView([44.58, 33.49], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmljdG9yYXRzdXRhIiwiYSI6ImNqOW9iNnJjczJnaW8zM3MyeDdrcXBuN3oifQ.gIWOmeqEuCRHKmWb_AMXFQ', {
        maxZoom: 18,
        id: 'mapbox.dark',
        accessToken: 'your.mapbox.access.token',
    }).addTo(mymap);
    var greenIcon = L.icon({
        iconUrl: '../imgs/location-pin.png',
        shadowUrl: '',

        iconSize:     [38, 40], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([44.58, 33.49], {icon: greenIcon}).addTo(mymap);
}
if (path[0]=='skills'){
    Loading('hide_logo');
    SVGMenu();
    (function() {
        new SliderFx( document.getElementById('slideshow'), {
            easing : 'cubic-bezier(.8,0,.2,1)'
        } );
    })();
}
if (path[0]=='portfolio'){
    Loading('hide_logo');
    SVGMenu()
}
if (path[0]==''){
    Loading();
    SVGMenu()
}