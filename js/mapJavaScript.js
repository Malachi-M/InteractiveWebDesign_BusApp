window.onload = mylocation;

//Test to see if there is geolocation capability
function mylocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    }
    else {
        alert ("Sorry, No location Support");
    }
}
//get geolocation
function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude =position.coords.longitude;
    /*
    var div = document.getElementById("location");
    div.innerHTML = "Current Location: " + "Lat: " + latitude + " Long: " + longitude;*/
    
    //Call to map function
    initialize(position.coords);
}

//creates marker for user location
function marker(map, latlong) {
    var options = {
        position: latlong,
        map: map,
        clickable: false
    };
    
    var marker = new google.maps.Marker(options);
}

//Creates custom bus marker
function busMarker(map, latlong, content, title){
    var image = '../images/busface_blue1.png';
    var busOptions = {
        position: latlong,
        map: map,
        icon: image,
        title: title
    };
    
    var marker = new google.maps.Marker(busOptions);
    
    var inforWindowOptions = {
       position: latlong,
        content: content,
    };
    var infoWindow = new google.maps.InfoWindow(inforWindowOptions);
    
    google.maps.event.addListener(marker, "click", function() {
    infoWindow.open(map);
    });
}

//Creates Google map 
function initialize(coords){
    var googleLatLng = new google.maps.LatLng(coords.latitude, coords.longitude);
    var busLatLng = new google.maps.LatLng(40.76019790000001, -96.6537738);
    var mapOptions = {
        center: googleLatLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    var content = "College View: Route 50";
    var title = "Route 50 ";
    marker(map, googleLatLng);
    busMarker(map, busLatLng, content, title);
}
