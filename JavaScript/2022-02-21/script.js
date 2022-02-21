// Window
/**
 * window.innerHeight
 * window.innerWidth 
 * 
 * Element:
 *      ANY HTML element
 *  element.clientHeight
 *  element.clientWidth
 */

var _goBottom = document.querySelector('#goBottom');

_goBottom.addEventListener('click', function () {
    var windowHeight = window.innerHeight;

    window.scroll({
        top: windowHeight-10,
        left: 0,
        behavior: 'smooth'

    });

});


window.onscroll = function () {
    var _goTop = document.querySelector('#topBtn');
    if( window.scrollY > window.innerHeight ) {
        _goTop.style.display = 'block';
    } else {
        _goTop.style.display = 'none';
    }
}

window.onclick = function (e) {
    console.log(e.target);
}


var _goTop = document.querySelector('#topBtn');
_goTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


if ( window.innerWidth < 1024 ) {
    _goBottom.style.bottom = '20%';
}