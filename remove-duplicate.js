

/* 
*array has some duplicates elements
* ---Remove duplicates elements from an array---
*/


function noDuplicate(array){
    let unique = [];
    for(let name of array){
        if(unique.includes(name) === false){
            unique.push(name);
        }
        
    }
   return unique;

}

let biryaniKhor = ['abul','kabul','babul','abul','sabul','kabul'];
let uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);




// ---another one by using number array---
/* function noDuplicateNumber(arr) {
    let keepUniqueNum = [];
    for (let num of arr) {
        if (keepUniqueNum.includes(num) === false) {
            keepUniqueNum.push(num);
        }
    }
    return keepUniqueNum;

}

let numbers = [1, 2, 3, 1, 4, 3, 5, 3, 2, 6];
let uniqueArray2 = noDuplicateNumber(numbers);
console.log(uniqueArray2); */