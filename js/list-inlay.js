/**
 * list-inlay.js
 */
var toggle = function(event){
  event.currentTarget.parentNode.classList.toggle('expanded');
}
var actions = document.querySelectorAll('.expand');
for (var i = 0; i < actions.length; i++) {
  actions[i].addEventListener('click', toggle, false)
}