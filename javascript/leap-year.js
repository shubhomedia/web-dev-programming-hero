
function leapYear(year){
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
        return true;
    }
    else {
        return false;
    }
}

let myYear = 2012;
let isItleapYear = leapYear(myYear);

console.log(isItleapYear);