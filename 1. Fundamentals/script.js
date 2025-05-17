// let js = "amazing";

// if (js === "amazing") alert("Js is Fun!!");

// console.log(40+56+69+89);
// console.log('Jonas');

// let javascrptIsFun = true;
// console.log(javascrptIsFun);
// console.log(typeof javascrptIsFun);
// javascrptIsFun = 'I don\'t know'; //This is not good as we are converting the datatype of the variable.
// console.log(javascrptIsFun);
// console.log(typeof javascrptIsFun);

// Const

// const myBirthYear = 2001;

// // var - Not recommended

// var job = 'programmer';
// console.log(job);

// var job = 'teacher'; //We were able to declare the job variable again.

//Var is function Scoped and let is block scoped.

//Never write the variable without declaring it as It has a global scope and is not recommended.

// Operators
// const currentYear = 2025;
// const myAge = currentYear - 2001;
// const ageVaishali = currentYear - 1990;
// console.log(myAge, ageVaishali);

// console.log(myAge * 2, ageVaishali / 10, 2**3); // 2**3 is 2 with power of three. 2 * 2 * 2

// let firstName = 'Yash';
// let lastName = 'Garg';
// console.log(firstName + ' ' + lastName);

// //Assignment Operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// ++x;
// --x;
// x--;
// console.log(x);

// // Comparison Operators

// console.log(ageVaishali > myAge); // <, >, <=, >=
// console.log(myAge >= 18);

// let a,b;

// a = b = 25 - 15 - 5;
// console.log(a, b);

// Strings

const firstName = 'Yash';
const job = 'Software Developer';
const birthYear = 2001;
const currentYear = 2025;
const yash = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(yash);

//Template Strings
const yashNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(yashNew);