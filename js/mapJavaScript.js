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
    initialize(position.coords);
}

//creats marker for users locations
function marker(map, latlong, title, content) {
    var options = {
        position: latlong,
        map: map,
        title: title,
        clickable: false
    };
    
    var marker = new google.maps.Marker(options);
    
    /*var inforWindowOptions = {
        content: content,
        map: map,
        postion: latlong
    };
    
    var infoWindow = new google.maps.InfoWindow(inforWindowOptions);
    
    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });*/
}

//Creates custom bus marker
function busMarker(map, latlong){
    var image = '../images/busface_blue1.png';
    var busOptions = {
        position: latlong,
        map: map,
        icon: image,
        clickable: false
    };
    
    var marker = new google.maps.Marker(busOptions);
}

//Creates Google map 
function initialize(coords){
    var googleLatLng = new google.maps.LatLng(coords.latitude, coords.longitude)
    //var busLatLng = new google.maps.LatLng(40.77319790000001 -96.5537738)
    var mapOptions = {
        center: googleLatLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    var title = "Current Location";
    var content = "You Are Here: " + coords.latitude + ", " + coords.longitude;
    marker(map, googleLatLng, title, content);
    busMarker(map, googleLatLng);
}
