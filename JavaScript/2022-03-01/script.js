/**
 * Events:
 *  change
 */

var _countries = document.getElementById('countries');

function customizeStates () {
    var _states = document.getElementById('states');
    for ( var _state of _states.children) {
        _state.style.display = 'none';
    }
    _states.firstElementChild.style.display = 'block';
    _states.firstElementChild.selected = true;

}


_countries.addEventListener('change', function () {

    console.log('changed', this.value);
    
    var _countries = this,
    countryValue = _countries.value,
    _states = document.getElementById('states');

    if( countryValue != '' && countryValue != null ) {
        var _statesTargeted = _states.getElementsByClassName(countryValue);

        customizeStates();

        if ( _statesTargeted.length > 0 ) {
            for ( var _targetedState of _statesTargeted ) {
                _targetedState.style.display = 'block';
            }
        }


    } else {
        customizeStates();        
    }


});



// window.addEventListener('click', function () {

// });