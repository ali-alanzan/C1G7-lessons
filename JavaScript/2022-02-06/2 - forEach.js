// forEach
/**
 * 
 * Array.forEach(element => {
 *  // do something
 *  // console.log(element);
 * });
 */

var students = [

    { name: "Ahmed",    grade: "40",    gradePercentage: "50",    status: "passed", }, 
    { name: "Mohammed",    grade: "30",    gradePercentage: "37.5",    status: "N/P", }, 
    { name: "Basel",    grade: "60",    gradePercentage: "75",    status: "passed", }, 
    { name: "Nader",    grade: "20",    gradePercentage: "25",    status: "N/P", }, 
    { name: "Mahmoud",    grade: "70",    gradePercentage: "87.5",    status: "passed", }, 
    { name: "Wael",    grade: "80",    gradePercentage: "100",    status: "passed", }, 
    { name: "Belal",    grade: "50",    gradePercentage: "62.5",    status: "passed", }, 
    
];


var i = students.length-1;
for (  ;  ;  ) {
    document.write(students[i].name);
    document.write('<br>');

    if( i == 0) {
        break;
    }

    i--;
}

students.forEach(function (obj, index) {
    document.write(obj.name);
    document.write('<br>');
})