var source = document.getElementById("user-template").innerHTML;
var template = Handlebars.compile( source );    
var html = template( routes );
document.querySelector('.route-list').innerHTML = html;
