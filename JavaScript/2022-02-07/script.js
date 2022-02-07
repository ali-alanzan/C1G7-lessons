// DOM
/**
 * innerText:     element.innerText
 *     get only the text
 * textContent:   element.textContent
 *     get the text with all its white space
 * innerHTML:     element.innerHTML
 *    get all the HTML content
 * 
 * document.body.childElementCount
 * document.body.childNodes
 *    return text and comments and elements and text in the document as children
 * document.body.children;
 *    return only the  HTML children elements from this element
 * 
 * firstChild:             e.firstChild
 *          chose text and comments and elements
 * 
 * firstElementChild:      element.firstElementChild
 *      ONLY HTML
 * lastElementChild:       element.lastElementChild
 *    ONLY HTML
 * 
 * previousElementSibling: element.previousElementSibling
 *   ONLY HTML
 * nextElementSibling:     element.nextElementSibling
 *   ONLY HTML 
 * parentElement:          element.parentElement
 * closest:                element.closest('selector');
 * 
 */

var darkColors = [ '#333', '#000' ];


var colors = [ 'red', 'blue', 'gray', 'yellow'];

var elements = document.querySelector('#main_menu').children;


for( var element of elements ) {
    var roundNumber = Math.floor( Math.random() * colors.length );
    element.style.color = colors[roundNumber];
}


var darkColorElements = document.querySelector('#main_menu').querySelectorAll('.darkColor');

for( var darkElement of darkColorElements ) {
    var roundNumber = Math.floor( Math.random() * darkColors.length );
    darkElement.style.color = darkColors[roundNumber];
}


var main_menu = document.querySelector('#main_menu');

// console.log(main_menu.children[main_menu.childElementCount-1]);

// console.log( main_menu.firstChild); // #text
// console.log( main_menu.firstElementChild); // first HTML Item

// console.log( main_menu.lastChild); // #text
// console.log( main_menu.lastElementChild); // last HTML Item


main_menu.firstElementChild.style.margin = '20px 0 100px 0';
main_menu.lastElementChild.style.margin = '100px 0 0 0';
main_menu.firstElementChild.style.color = 'purple';
main_menu.lastElementChild.style.color = 'purple';


var aboutElement = main_menu.children[6];
console.log( aboutElement.innerText );
console.log( aboutElement.nextSibling ); // #text 
console.log( 'next', aboutElement.nextElementSibling ); // next HTML element 


console.log( aboutElement.previousSibling ); // #text 
console.log( 'prev', aboutElement.previousElementSibling ); // previous HTML element 



console.log(aboutElement.parentElement);

var level3Item = document.querySelector('#level3Item');
console.log(level3Item.closest('.submenu'));


// console.log(level3Item.parentElement, level3Item.parentElement.innerText);
// console.log(level3Item.parentElement, level3Item.parentElement.textContent);

// console.log('html level3', level3Item.parentElement.innerHTML);



