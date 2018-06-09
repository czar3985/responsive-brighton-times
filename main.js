var menu = document.querySelector('#menu');
var header = document.querySelector('header');
var main = document.querySelector('main');
var menu_off_canvas = document.querySelector('#menu_off_canvas');

menu.addEventListener('click', function (e) {
    menu_off_canvas.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function () {
    menu_off_canvas.classList.remove('open');
});
header.addEventListener('click', function () {
    menu_off_canvas.classList.remove('open');
});
window.addEventListener('resize', function () {
    menu_off_canvas.classList.remove('open');
});