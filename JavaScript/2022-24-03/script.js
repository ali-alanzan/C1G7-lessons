var _form  = document.getElementById('add_member');

_form.addEventListener('submit', function (e) {
    e.preventDefault();
    var _form = this;

    var xhr = new XMLHttpRequest(); // create a XHR Object

    // Set The Method to POST
    // And The URL to the endpoint file 
    // AND The Async function to true ( wait the connection )
    xhr.open('post', _form.getAttribute('action'), true); 


    var form_data = {
        memberName: _form.querySelector('input[name="memberName"]').value,
        phone: _form.querySelector('input[name="phone"]').value,
        avatar: _form.querySelector('input[name="avatar"]').value,
        description: _form.querySelector('textarea[name="description"]').value,
        services: []
    }

    var services = []; 

    _form.querySelectorAll('input[name="services[]"]').forEach( inputElement => {
        if( inputElement.value.length > 0 ) {
            services.push(inputElement.value);
        }
    });

    form_data.services = services;

    var form_data_JSON = JSON.stringify(form_data);

    xhr.send(form_data_JSON);

    
    xhr.onreadystatechange = function() {
        console.log(xhr);
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        console.log(response);
    }



});