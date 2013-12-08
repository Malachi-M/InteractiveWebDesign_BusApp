window.onload = mylocation;

function mylocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation);
    }
    else{
        alert("Sorry, No location Support");
    }
}

function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude =position.coords.longitude;
    /*
    var div = document.getElementById("location");
    div.innerHTML = "Current Location: " + "Lat: " + latitude + " Long: " + longitude;*/
    initialize(position.coords);
}

function marker(map, latlong, title, content) {
    var options = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    
    var marker = new google.maps.Marker(options);
    
    var inforWindowOptions = {
        content: content,
        map: map,
        postion: latlong
    };
    
    var infoWindow = new google.maps.InfoWindow(inforWindowOptions);
    
    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
};

function initialize(coords){
    var googleLatLng = new google.maps.LatLng(coords.latitude, coords.longitude)
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
}
