// Manipulating DOM
/**
 * classList:
 *     element.classList.add('className');
 *     element.classList.remove('className');
 *     element.classList.toggle('className');
 * 
 * ADDING METHODS:
 *  append: add element or textNode or node or e.g. to the end of the content of another element
 *  appendChild:     the same as append BUT only adding HTML elements
 *  prepend:         add the element to the beginning of another element
 * 
 * 
 *  before:  
 *   ele_1.before(ele_2)    
 *   : put ele_2 before ele_1
 *    
 * after:     
 *   ele_1.after(ele_2)
 *   : put ele_2 after ele_1
 * 
 *  createElement: 
 *      var newElement = document.createElement('li');
 * 
 * Add text to element:
 *      var text = document.createTextNode(subject.name);
 *      newElement.append(text);
 * all those are ways to control what inside an HTML element: 
    * newElement.innerHTML = '<div></div>';
    * newElement.innerText = 'text';
    * newElement.textContent = 'text';
    * 
 * 
 * remove element:
 *    element.remove()
 * 
 * remove Element By Parent Node
 *   parentElement.removeChild(elementChild);
 * 
 */

var _student_grades = document.querySelector('#student_grades');
calcStatus = _student_grades.getAttribute('calculated-status');

var _firstList = _student_grades.firstElementChild;

// console.log(_firstList.classList);
// // _firstList.classList.remove('science');
// _firstList.classList.toggle('science');
// _firstList.classList.add('academic'); // change the color
// console.log(_firstList.classList);


var subject = {
    name: 'English',
    grade: '70',
    finalGrade: '80',
    classes: [
        'one',
        'two'
    ]
};

var liElement = document.createElement('li'),
    contentText = document.createTextNode(subject.name);

    
console.log(liElement, contentText);

    
liElement.append(contentText);
liElement.append('Test');
liElement.id = 'new_li';
liElement.dataset.grade = subject.grade;
liElement.dataset.finalGrade = subject.finalGrade;
liElement.setAttribute('class', subject.classes.join(' '));
_student_grades.appendChild(liElement);


var testNewElement = document.createElement('h3');
testNewElement.innerHTML = 'HEading 3';
testNewElement.id = 'heading_3';
document.body.prepend(testNewElement);


var _heading_3 = document.getElementById('heading_3');
_student_grades.after(_heading_3);


var new_li = document.getElementById('new_li');

var originalElement = _student_grades.children[_student_grades.childElementCount-2];
var originalElement = _student_grades.lastElementChild.previousElementSibling;

console.log(originalElement.innerHTML);
originalElement.before(new_li);


setTimeout(function () {
    
    // _heading_3.remove();

    document.body.removeChild(_heading_3);

}, 2000, _heading_3);