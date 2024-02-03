
/* ---Math.js---- 
* Math. -----  eta javascript er biuld in ekta jinish jetar modhe math related onek jinish javascript already kore rakhse user er subidhar jonno sudhu Math. likhe setake call korley kaj hoye jabe-----

*/

//---- will show output minimum number of all numbers---
const min = Math.min(100, 40, 65, 3, 76, 4, 10, 25);
console.log( 'minimum number:', min);

// ---will show output  maximum number of all numbers---
const max = Math.max(100, 40, 65, 3, 76, 4, 10, 25);
console.log( 'maximum number:', max);

//--- pi er man---- 
console.log(Math.PI);

// --absolute(abs) ---etar kaj hosse absolute value dibe output mane number er sathe +, - or jay thakuk na kn eta sudhu number take output hisebe dekhabe... tasaraw eta 2 ta number er modhe difference ta outpush dekhabe but +, - sara absolute number ta dibe difference er khetrew
let num = Math.abs(-88);
// let num = Math.abs(5-10);
console.log(num);


// ----Math.round--
/* --round er kaj ta hosse---kono ekta doshomik number ke purno songkha te rupantor kore .. round hosse nikotoborty purnosonkhake output dekhay */

console.log(Math.round(2.25));
console.log(Math.round(2.50));
console.log(Math.round(2.75));
console.log(Math.round(2.45));


//--- Math.floor----
/* --floor-- er kaj hosse kono ekta sonkhar doshomik er por ja e thakbe setake bad diye purno songkha output dekha. nikotoborty purno sonkha na .se doshomik er por ja pabe take bad diye purno sonkha ta output hisebe dekhabe--- */

console.log(Math.floor(2.25));
console.log(Math.floor(2.45));
console.log(Math.floor(2.50));
console.log(Math.floor(2.75));


// ---Math.ceil---
/* ---ceil-- eta floor er thik opposite mane floor . ceil doshomik er por ja e thakuk se setake purno sonkhay rupantor korbe bt 1 jog kore purno sonkhay rupantor korbe that means (2.00022) thakle take 3 baniye dibe 
(2.69879) thaklew 3 baniye dibe doshomik kete diye tar sathe 1 jog diye seta dekhabe purno sonkha hisebe   */

console.log(Math.ceil(2.25));
console.log(Math.ceil(2.55));
console.log(Math.ceil(2.95));


// --Math.random---
/* ---random -- er kaj hosse random doshomik sonhkha dewa 0 theke 10 er modhe------- but etake abr 10 diye gum dile 1 theke 10 er modhe dekhabe -----abr setake rounded korle purno songkha dekhabe  */

console.log(Math.random());
console.log(Math.random()*10)
let number = Math.round(Math.random()*10);
console.log(number);




