function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(40.808, -96.682),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);