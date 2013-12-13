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
    var busLatLng1 = new google.maps.LatLng(40.85619790000001, -96.6337738);
    var busLatLng2 = new google.maps.LatLng(40.79819790000001, -96.6937738);
    var busLatLng3 = new google.maps.LatLng(40.82019790000001, -96.6337738);
    var mapOptions = {
        center: googleLatLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        streetViewControl: false
        
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    var content = "College View: Route 50 Next Stop: 8 min";
    var content1 = "Havelock: Route 41 Next Stop: 15 min";
    var content2 = "West A: Route 51 Next Stop: 2 min";
    var content3 = "Vine: Route 25 Next Stop: 20 min";
    var title = "Route 50";
    var title1 = "Route 41";
    var title2 = "Route 51";
    var title3 = "Route 25";
    marker(map, googleLatLng);
    busMarker(map, busLatLng, content, title);
    busMarker(map, busLatLng1, content1, title1);
    busMarker(map, busLatLng2, content2, title2);
    busMarker(map, busLatLng3, content3, title3);
}
