

/* ----practice task one---- */
/* question: Write a function to convert temperature from Celsius to Fahrenheit */

/* function celciousToFarenheight(cel){
  let farenheight = (cel * (9/5)) + 32;
  let convert = farenheight + ' farenheight';
  return convert;

}

let convert = celciousToFarenheight(9);
console.log(convert); */


/* ---practice task two--- */
/* question: You are given an array of numbers. Count how many times the a number is repeated in the array. */

function countDuplicate(numbers){
  let countDuplicate = 0;
  let search = [6];
  for(let num of numbers){
    if(search.includes(num) === true){
      countDuplicate ++;
    }
  }
   return countDuplicate;

}

let numbs = [5,6,11,12,98, 5, 6, 6, 6];
let result = countDuplicate(numbs);
console.log('Duplicate Numbers:', result);