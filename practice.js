

/* ----practice task one---- */
/* question: Write a function to convert temperature from Celsius to Fahrenheit */

function celciousToFarenheight(cel){
  let farenheight = (cel * (9/5)) + 32;
  let convert = farenheight + ' farenheight';
  return convert;

}

let convert = celciousToFarenheight(9);
console.log(convert);