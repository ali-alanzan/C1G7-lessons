// DOM
/**
 *  DOM ROOT
 *  document
 *  document.body
 *  document.head
 * Methods:
 *  getElementById:         document.getElementById('idName')
 *  getElementsByTagName:   document.getElementsByTagName('tagName')
 *  getElementsByClassName: document.getElementsByClassName('className')
 *  querySelector:          document.querySelector(cssSelector)
 *      ONLY 1 Element Used
 *      selectorQuery: 
 *      class: .class
 *      id:    #idName
 *      .... css selectors
 *  querySelectorAll:       document.querySelectorAll(cssSelector)
 *      All the elements 
 */


// var darkColorElements = document.getElementsByClassName('darkColor');

// var _ul = document.getElementById('main_menu'),
// darkColorElements = _ul.getElementsByTagName('li');

var darkColorElements = document.querySelectorAll('#main_menu .darkColor');

console.log(darkColorElements);

for ( element of darkColorElements ) {
    // var color = element.dataset.color;
    var color = element.getAttribute('data-color');

    element.style.color = color;

    console.log(color);

}


var backToTop = document.getElementById('backToTop');

backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}