"user strict";
// this
/**
 * 
 * Array.join(separator)
 */


function member() {

    return {
        fName: 'Ali',
        lName: 'Alanzan',
        getName: function () {
            // console.log(this); // this: ref to the closer object to itself
            document.getElementById('content').innerText = this.fName + ' ' + this.lName;
        },
        responsibilities: {
            family: {
                getMembers: function () {
                    // console.log(this); // the key family's value becuase it's the closer object to it
                    document.getElementById('content').innerHTML += '<br/>';
                    document.getElementById('content').innerHTML += 'members are ' + this.members.join(' and ');

                },
                members: [
                    'Ali',
                    'Yasser',
                    'Wadah'
                ]
            }
        }
    }
}


console.log(member(), typeof(member())); // when the function fired the function will become what it returns
console.log(member, typeof(member)); // function: code


var member = member();

member.getName();
member.responsibilities.family.getMembers();



// Example
var helper = {};
helper.getLocation = function () {
    return window.location.href;
}