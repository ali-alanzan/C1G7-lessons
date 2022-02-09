
// Manipulating DOM
/**
 * var element = _exampleForm.querySelector('img');
 * attributes: element.attributes;
 * id:         element.id
 * element.title 
 * FORM
 * value:      input.value || formElement.value 
 *             formElement.value  = 'new value'
 * input checkbox:   input.checked
 *             input.checked = true  
 *             input.checked = false
 * 
 * select:
 *          _select.options;
 *          _select.selectedIndex;
 * option:     option.selected
 * 
 * dataset:
 *          element.dataset;
 *    Reach All Attributes Starts With data-
 *   Attribute Name:
 *    one word:         element.dataset.word
 *    multi words:      element.dataset.wordsCapitalizedBetweenDashes
 *  // Ex: <li data-grade="60" data-final-grade="80">Physics</li>
 *         element.dataset.grade
 *         element.dataset.finalGrade
 * 
 * style:
 *  get element style property:
 *     var colorElement = element.style.color;
 *  set element style property:
 *     element.style.color = '#f00';
 * 
 * Attribute METHODS: 
 *  getAttribute:     element.getAttribute('attribute-name');
 *  setAttribute:     element.setAttribute('attribute-name', 'valueOfTheAttribute');
 *  removeAttribute:  element.removeAttribute('attribute-name');
 * 
 */
 var _exampleForm = document.querySelector('#exampleForm');

 var _img = _exampleForm.querySelector('img'),
 _checkbox =  _exampleForm.querySelector('input[type="checkbox"]'),
 _select = _exampleForm.querySelector('select'),
 _selectedOption = _select.querySelector('option[selected]'),
 _anotherOption = _select.querySelector('#anotherOption');;
 
 console.log(_anotherOption.getAttribute('data-focus'));
 _exampleForm.removeAttribute('style');
 _anotherOption.setAttribute('data-focus', '100');
 console.log(_anotherOption.getAttribute('data-focus'));
 _anotherOption.setAttribute('data-subject', 'chimical equipment');
 console.log(_anotherOption.getAttribute('data-subject'));
 
 
 
 
 
 
 // console.log(_img.attributes, _img.title);
 
 // console.log(_checkbox.checked);
 
 _select.onchange = function () {
     var select = _select.value;
     
     _selectedOption = _select.options[e.selectedIndex];
 
     console.log(_select.value, _selectedOption.dataset.focus);
     
 }
 
 console.log(_select.value, _selectedOption.dataset.focus);