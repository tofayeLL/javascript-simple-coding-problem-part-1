/* 
*function takes an array as a parameter
*give me the average of odd numbers in the array
*/

function oddAverage(numbers) {
    //   console.log(numbers);
    let odds = [];
    for (let number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    // contains odds array is only odd numbers
    //   console.log(odds);
    let sum = 0;
    for(let number of odds){
         sum = sum + number;
    }
    let count = odds.length;
    console.log(sum, count);
    let avg = sum / count;
    return avg;
}

let numbs = [42, 13, 58, 65, 81, 96, 7];
let oddAvg = oddAverage(numbs);
console.log('average of odd numbers:', oddAvg);








// another way -----i solve it by using  my logic -------

/* function oddAverage(numbers){
    console.log(numbers);
    let keepOdds = [];
    let sum = 0;
    let len;
    for(let num of numbers){
        if(num % 2 === 1){
            // console.log( 'odd numbers:', num);
            sum = sum + num;
            keepOdds.push(num);
            len = keepOdds.length;
        }
    }
    console.log( 'array contains only odd numbers:',  keepOdds);
    let avg = sum / len;
    return avg;
}

let numbs = [42, 13, 58, 65, 81, 96, 7];
let oddAvg = oddAverage(numbs);
console.log( 'average of odd numbers:', oddAvg); */