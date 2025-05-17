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



// DAY-2: Strings


// const firstName = 'Yash';
// const job = 'Software Developer';
// const birthYear = 2001;
// const currentYear = 2025;
// const yash = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
// console.log(yash);

// //Template Strings
// const yashNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
// console.log(yashNew);

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`Strings
// with multiple
// lines`);



// Day-2: If-Else in JS



// const age = 5;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//   console.log('You are Eligible for giving the Driving License Exam 🚗'); // For Emoji : window + .
// } else {
//   console.log(`Sorry! You are not eligible for taking the Driving License Test. Wait another ${18 - age} Years!!`)
// }

// const birthYear = 2001;
// let century;
// if(birthYear < 2001)
// {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);



// Day-2: Type Conversion and Coercion

// Type Conversion: When we explicitely perform the conversion
// Coercion: When Js performs the conversion for us. 
const currentYear = '2025';
console.log(Number(currentYear), currentYear);
console.log(currentYear + 18); // string contatination
console.log(Number(currentYear) + 18); // Sum

console.log(Number('Jonas')); // NaN
console.log(String(23), 23);

// type coercion
console.log("I'm " + 24 + ' years old.') // 24 gets converted to string automatically.
