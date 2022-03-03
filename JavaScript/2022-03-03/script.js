/**
 * Events:
 *  submit
 */

var _form  = document.getElementById('searchForm');


function errorHelper(errorMessage) {
    var _error = _form.querySelector('.error');
    if ( _error != null ) {
        _error.innerHTML = errorMessage;
    } else {
        var errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.innerText = errorMessage
        _form.append(errorElement);

    }
}


_form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop Submit the new request of The Form in the browser

    console.log(event);
    
    var _form = this,
    errorMessage = 'this field cannot be empty',
    _search = _form.querySelector('#search');
    console.log('Form Submited');


    if( _search.value == '' || _search.value == null ) {
        errorHelper(errorMessage);
    } else if (  _search.value.length < 4  ) {
        errorMessage = 'this field is too short';
        errorHelper(errorMessage);
    }  else if (  _search.value.length > 14  ) {
        errorMessage = 'this field is too long';
        errorHelper(errorMessage);
    }  else {
        _form.submit();
    }

    return false;
});


// window.addEventListener('click', function (event) {
//     console.log(event);
//     console.log(event.target)
// })