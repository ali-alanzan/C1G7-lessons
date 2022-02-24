// Events
// click
// dblclick
// keydown
// keyup
// focus
// blur

function deleteInput(_remove) {
    _remove.onclick = function () {
        _remove = this;
        
        _remove.parentElement.querySelector('input').style.backgroundColor = 'red';
    
        setTimeout(function () {
            var confirmDelete = confirm('Are you sure to delete this?');
    
            if( confirmDelete ) {
                _remove.parentElement.remove();
            } else {
                _remove.parentElement.querySelector('input').style.backgroundColor = 'initial';
            }    
        }, 200, _remove);
    }
}


function inputType(_input, event) {
    console.log(_input, event);

    if( event == 'focus' ) {
        var placeholder = _input.getAttribute('placeholder');
        _input.setAttribute('data-placeholder', placeholder);
        _input.setAttribute('placeholder', '');
    } else if( event == 'blur') {
        var dataPlaceHolder = _input.getAttribute('data-placeholder');
        _input.setAttribute('placeholder', dataPlaceHolder);
        _input.setAttribute('data-placeholder', "")
    }

}



var _remove = document.querySelector('.remove');
deleteInput(_remove);

var _input = document.querySelector('#skills input');
_input.addEventListener('focus', function () {
    _input = this;
    inputType(_input, 'focus');
});

_input.addEventListener('blur', function () {
    _input = this;
    inputType(_input, 'blur');
})


// _remove.addEventListener('dblclick', function () {
//     _remove = this;
//     _remove.parentElement.remove();
// });