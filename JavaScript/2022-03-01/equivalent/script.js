// Events
/**
 * Events:
 * keydown
 * keyup
 */
'use strict';
 var amountInputs = document.getElementsByClassName('amount');

 
 for ( var _input of amountInputs ) {
    // Event
    _input.addEventListener('keyup', function () {
        //  KEYUP event FIRED
        _input = this;
        calcAmountForInputs(_input);
     });

    //  Blur
    _input.addEventListener('blur', function () {
        calcTotal();
    });
 }


 function calcTotal() {
    var _total = document.getElementById('total'),
    total = 0;


    var t = 1;
    for ( var _inp of amountInputs ) {
        total += Number( _inp.value );
        t ++;
    }

    _total.value = total.toFixed(3);;
 }


 function calcAmountForInputs(_input) {

    var currentAmount = _input.getAttribute('data-amount'),
    currentValue = _input.value,
    resultToMulti = Number(currentValue) / Number(currentAmount);


    for ( var _inp of amountInputs) {

        if ( !  _inp.isSameNode(_input) ) {
        
            if ( Number(_input.value) <= 0 ) {
                _inp.value = 0;
            } else {
                var inpAmount = _inp.getAttribute('data-amount'),
                result = Number(resultToMulti) * Number(inpAmount),
                checkStringFloat = result.toString().indexOf('.');

                if( checkStringFloat >= 0  ) {
                    result = result.toFixed(3);
                }

                _inp.value = result;

            }
            calcTotal();
        }


    }
 }