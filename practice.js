

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

/* function countDuplicate(numbers){
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
console.log('Duplicate Numbers:', result); */





/* ------practice task three--- */
/* question: Write a function to count the number of vowels in a string. */

/* function  countVowels(str){
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for(let i = 0; i < str.length; i++){
    let characters = str[i];
    if(vowels.includes(characters)){
      count ++;
    }
  }
  return count;
  
}

let sentence = 'i am a Serious Learner';
let vowels = countVowels(sentence);
console.log('Total vowels in the string or sentences :', vowels);
 */





/* -----practice task four------- */
/* question: Write a function to find the longest word in a given string. */

/* function getLongestWord(str){
  let words = str.split(' ');
  let longestWord = '';
  for(let word of words ){
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}

let sentence = 'I am learning Programming to become a programmer';
let longestWord = getLongestWord(sentence);
console.log('Longest word from the sentence is:', longestWord); */




/* ---practice task five----- */
/* question: Generate a random number between 10 to 20 */

/* let randomNumber = Math.round(Math.random()* 10 + 10);
console.log(randomNumber); */



// another way to get random number between 10 to 20
let randomNumber = Math.floor(Math.random() * ((20 - 10) + 1)) + 10;
console.log(randomNumber);
