/* 
*---------simple logic----------
*year will be a leap year if the year divisible by 4
*/

/* function isLeapYear(year){
    if(year % 4 === 0){
        return 'leap year';
    }
    else{
        return 'not a leap year';
    }
}

let year = isLeapYear(3026);
console.log(year);
 */











/* 
*-------Correct Logic will be about leap year------
* first logic: Those year that is not divisible by 100, if the year is visible by 4 then it will be a leap year.
*second logic: if the year is divisible by 100 and also divisible by 400 then it will be leap year.
*/

function isLeapYear2(year){
    if( (year % 100 !== 0)  && (year % 4 === 0 ) ){
        return true;
    }
    else if( (year % 100 === 0) && (year % 400 === 0)){
        return true;
    }
    return false;
}

let year1 = isLeapYear2(2100);
let year2 = isLeapYear2(2400);
let year3 = isLeapYear2(1900);
let year4 = isLeapYear2(2052);
console.log(year1, year2, year3, year4);