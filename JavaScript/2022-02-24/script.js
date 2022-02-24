// Events
// click
// dblclick
// keydown
// keyup
// focus
// blur

/**
 * Target.addEventListener(Event, function() {
 *  // code to execute when the target object had the targeted event
 * });
 * 
 *  Target.on"anyEvent" 
 *      Example: onclick:
 * Target.onclick =  function () {
 *  // code to execute when the target object had the targeted event
 * }
 */


function checkErrorOnInput(_input, error) {
    if( _input.parentElement.querySelector('p.error') != null ) {
        _input.parentElement.querySelector('p.error').innerText = error;
    } else {
        var _errorElement = document.createElement('p');
        _errorElement.classList.add('error');
        _errorElement.innerText = error;
        _input.parentElement.append(_errorElement);

    }

    _input.focus();
    _input.addEventListener('keydown', function () {
        _input = this;
        // console.log('keydown');
        var _error = _input.parentElement.querySelector('.error');
        if(_error != null) {
            _error.remove();
        }
    });

    // _input.addEventListener('keyup', function () {
    //     _input = this;
    //     console.log('keyup');
    // });
}


var _addSkill = document.getElementById('add-skill');


_addSkill.addEventListener('click', function () {
    
    var _skills = document.getElementById('skills'),
    _li = document.createElement('li'),
    _newInput = document.createElement('input'),
    _span = document.createElement('span'),
    inputs = _skills.querySelectorAll('input'),
    errors = _skills.querySelectorAll('.error'),
    error = false;

    if( errors != null) {
        for ( var _error of errors ) {
            _error.remove();
        }
    }

    if( inputs != null ) {
        for ( var _input of inputs ) {

            if( _input.value.trim().length <= 0  ) {
                error = true;
                checkErrorOnInput(_input, 'this field is required' );

                break;
            } else if ( _input.value.trim().length > 154 ) {
                error = true;
                checkErrorOnInput(_input, 'field cannot be more than 154 characters' );
            }
            
        }
    }

    if( error === false ) {
        _newInput.setAttribute('type', 'text');
        _newInput.setAttribute('placeholder', 'share your skills');

        _span.classList.add('remove');
        _span.innerText = ' - ';

        _li.append(_newInput);
        _li.append(_span);

        _skills.append(_li);

        deleteInput(_span);
        
        _newInput.addEventListener('focus', function () {
            _newInput = this;
            inputType(_newInput, 'focus');
        });
        
        _newInput.addEventListener('blur', function () {
            _newInput = this;
            inputType(_newInput, 'blur');
        })
        

        // _skills.children[_skills.childElementCount-1].querySelector('input').addEventListener('focus', function () {
        //     console.log('input focused');
        // })

        _skills.children[_skills.childElementCount-1].querySelector('input').focus();

    }

} );
