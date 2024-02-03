
// convert inch to feet
// 12 inch 1 feet

//-------- will show output only the feet not inch--------
/* function inchToFeet(inch){
    let feet = inch / 12;
    return feet;
}

let shuvoHeight = inchToFeet(68.10);
console.log(shuvoHeight); */




//----- will show output feet and inch------
/* function feetToInch(inch){
   let feetFraction = inch / 12;
   let feetInt = parseInt(feetFraction);
   let inchRemaining = inch % 12;
   let result = feetInt + ' ft '  + inchRemaining + ' inch ';
   return result;  
}

let tofayelHeight = feetToInch(75);
console.log(tofayelHeight); */




// ----convert kilometer to mile----
function kilometerToMiles(kilo){
    console.log('kilometer:', kilo);
    let mile = kilo * 0.621371;
    return mile;
}

let result = kilometerToMiles(500);
console.log( 'mile:', result);

// ----convert mile to kilometers----
/* function milesToKilometer(mile){
    console.log('miles:', mile);
    let kilo = mile * 1.609 ;
    return kilo;
}

let result = milesToKilometer(500);
console.log( 'Kilometer:', result); */

