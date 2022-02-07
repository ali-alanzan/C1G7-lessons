// Object
var member = {
    name: 'Basel',
    age: 12,
    nationality: 'Egypt',
    skills: [
        'selling',
        'computer skills'
    ]
}
// Remove a key in an object
console.log(member);
delete member.nationality;
console.log(member);

member.nationality = 'Egypt';


var members = [
    {
        name: 'Mahmoud',
        age: 12,
        nationality: 'Egypt'
    },
    {
        name: 'Nader',
        age: 12,
        nationality: 'Egypt'
    },
    {
        name: 'Basel',
        age: 12,
        nationality: 'Egypt'
    },
    member,
    {
        name: 'Wael',
        age: 12,
        nationality: 'Egypt'
    }
];
members.push({
    name: 'Belal',
    age: 12,
    nationality: 'Egypt'
});

console.log(members);


var html_members = '<ul>';


members.forEach(function (value) {
    
    html_members += `
    <li>
         <h3> ${value.name} </h3>
         <p> ${value.age} </p>
         <p> ${value.nationality} </p>

         `;
         
         if( value.skills != undefined && value.skills.length > 0 ) {
             html_members += '<ol>';
            value.skills.forEach(function (skill) {
                html_members += '<li>' + skill + '</li>';
            });
            html_members += '</ol>';

         }


         html_members += `
    </li>
    
    
    `;

});

html_members += '</ul>';

document.body.innerHTML += html_members;

console.log(html_members);