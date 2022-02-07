// HTML object
// 
/**
 * getElementById('elementID');
 *  id used for one unique element
 * 
 * 
 * getElementsByTagName('tagName');
 * getElementsByClassName('className');
 * 
 * 
 */
console.log( document.getElementById('title').innerText );
console.log( document.getElementById('title').getElementsByTagName('small') );


console.log( document.getElementsByTagName('small') );
console.log( document.getElementsByTagName('small')[0] );


console.log( document.getElementsByClassName('error') );


// get the element text without trimming the whitespace
console.log( document.getElementById('title').textContent );
console.log( document.getElementById('title').getElementsByTagName('small') );



//more than one element
// HTML collection
document.getElementsByTagName('small');

// first element in the collection
document.getElementsByTagName('small')[0];


// all the text inside the element
console.log(document.getElementById('title').innerText);
document.getElementById('title').innerText = 'Hello from the innerText <span style="color:red;">method</span> ';


setTimeout(function () {
    console.log(document.getElementById('title').innerHTML);
    document.getElementById('title').innerHTML = 'Hello from the innerHTML <span style="color:red;">method</span> ';    
}, 5000);

