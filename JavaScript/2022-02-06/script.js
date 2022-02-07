// for ( var value of array ) {
    //  do sth
// }

var students = [

    { name: "Ahmed", key: 'test',   grade: "40",    gradePercentage: "50",    status: "passed", }, 
    { name: "Mohammed",    grade: "30",    gradePercentage: "37.5",    status: "N/P", }, 
    { name: "Basel",    grade: "60",  nationallity: 'Syria',  gradePercentage: "75",    status: "passed", }, 
    { name: "Nader",    grade: "20",    gradePercentage: "25",    status: "N/P", }, 
    { name: "Mahmoud",    grade: "70",    gradePercentage: "87.5",    status: "passed", }, 
    { name: "Wael",    grade: "80",    gradePercentage: "100",    status: "passed", }, 
    { name: "Belal",    grade: "50",    gradePercentage: "62.5",    status: "passed", }, 
    
];
    
var html_students = '<ul id="stduents">';

for ( var value of students ) {
    console.log(value);
    if ( typeof(value) == 'object' ) {
        var name_html = '';

        if ( value.name != undefined ) {
            name_html = '<h3> ' + value.name +' </h3>';
            delete value.name;
        }

        html_students += `<li> ${name_html} <ol> `;

        for ( var key in value ) {
            html_students += `<li> `+key+` : ` + value[key] + ` </li>`;
        
        }

        html_students += ` </ol> </li> `;

    }

}

html_students += "</ul>";

document.body.innerHTML += html_students;


var STUDENTS_HTML = document.querySelectorAll('#stduents > li');

for (var student of STUDENTS_HTML) {
    console.log(student.innerHTML);
}