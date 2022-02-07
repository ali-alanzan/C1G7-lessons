"user strict";
// setInterval

var _title = document.getElementById('timer'),
start = 1;
_title.innerHTML = start


var t  = 0;
var testTmier = setInterval(function () {
    t++;
    console.log(t);
}, 1000);
setTimeout(function () {
    clearInterval(testTmier);
}, 5000, testTmier);

var sportCounter = setInterval(function () {
   
    var title = _title.innerHTML;
    _title.innerHTML = Number(title) + 1;
    
}, 1000, _title);


document.getElementById('stop').addEventListener('click', function () {
    clearInterval(sportCounter);
    document.getElementById('timer').innerHTML += ' interval has stop';
});