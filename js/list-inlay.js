/**
 * list-inlay.js
 */
var toggle = function(event){
    event.currentTarget.parentNode.classList.toggle('expanded');
    hideAll();
}
var actions = document.querySelectorAll('.expand');
    for (var i = 0; i < actions.length; i++) {
        actions[i].addEventListener('click', toggle, false)
}

function hideAll(){
    if (document.querySelectorAll('.profile.expanded').length > 0){
        var actions = document.querySelectorAll('.profile');
        for (var i = 0; i < actions.length; i++) { 
            if(actions[i].className != "profile expanded"){
            actions[i].setAttribute('style', 'display:none;');
            }    
        }
    }else {
        var actions = document.querySelectorAll('.profile');
        for (var i = 0; i < actions.length; i++) { 
            actions[i].setAttribute('style', 'display:block;');
        } 
    }
}