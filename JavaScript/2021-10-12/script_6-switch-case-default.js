// switch case statement
var weatherSeason = prompt('choose season, winter, fall, summer, spring?'); 

switch ( weatherSeason  ) {
    case 'winter':
    // code
    console.log('Stay at home season');
    break;

    case 'fall':
        // code
        console.log('Welcome to fall season');
    break;      
    case 'summer':
    case 'spring':

        console.log('Go to Sea Season and smill the FLowers, spring ');
      
    default:
        alert('Unknow Weather Season');
        break;

}

var age = 20;

switch( true ) {
    case  age > 40 && age < 60:
        console.log('your age is acceptable');
        break;
    case  age > 18 && age < 40:
        console.log(' your job would be in the storage part ');
        break;
    case  age > 60 || age < 18:
        console.log(' your age not acceptible ');
        break;
    default:
        console.log(' defult result in working');
        break;
}

