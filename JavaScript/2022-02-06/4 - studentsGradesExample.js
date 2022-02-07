// for loop Example

var _ol = document.getElementById('score'),
final_score = _ol.dataset.finalScore,
_list = _ol.getElementsByTagName('li');


function calcSubjects() {
    for ( var i = 0; i <= _list.length-1; i++ ) {

        var _student = _list[i],
        score = _student.dataset.score;
        if( score > final_score ) {
            score = final_score;
        }
    
        var gradePercentage = (score / final_score) * 100;
    
        _student.innerHTML += ' <b> ' + gradePercentage + '%</b>';
    
        if( gradePercentage == 100 ) {
            _student.style.color = 'green';
        } else if ( gradePercentage < 50 ) {
            _student.style.color = 'red';
        }
    
    }
}


calcSubjects();

