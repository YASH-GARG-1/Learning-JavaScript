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
// const currentYear = '2025';
// console.log(Number(currentYear), currentYear);
// console.log(currentYear + 18); // string contatination
// console.log(Number(currentYear) + 18); // Sum

// console.log(Number('Jonas')); // NaN
// console.log(String(23), 23);

// // type coercion
// console.log("I'm " + 24 + ' years old.'); // 24 gets converted to string automatically.
// console.log('23' - '10' - 3); //Here strings are converted to numbers. (for '-' operator).
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n - 1; // 10
// console.log(n);

// let num = 2 + 3 + 4 + '5' // "95" : (2+3+4) + "5"
// console.log(num);

// let var1 = '10' - '4' - '3' - 2 + '5' // "15" (10 - 4 - 3 - 2) + "5"
// console.log(var1);

// Day-2: Truthy and falsy Values.

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // True: not an empty string
// console.log(Boolean({})); // true: empty object
// console.log(Boolean('')); //false : Empty String.

//Day-2: Equality operators: == and ===

// const age = 18;
// if(age === 18)
// {
//   console.log('You just became an adult 🎉');
// }

// console.log(18 === 19);
// console.log(18 === '18'); // === strictly compares. Hence false
// console.log(18 == '18'); // == Performs type coercion. (Loosely compares) hence true.

// const favouriteNumber = Number(prompt("What's is your favourite Number?"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if(favouriteNumber === 24)
// {
//   console.log('Cool!! 24 is an amazing Number');
// }

// if(favouriteNumber !== 23)
//   console.log('Why not 23??');

// Day-3: Boolean Logic

// And : A && B
// Or : A || B
// Not : !A (Has precedence over And , Or)

// const hasDriverLicense = true;
// const hasGoodVision = true;

// if(hasDriverLicense && hasGoodVision)
// {
//   console.log("Congratulations!! You are a driver 🚗");
// }
// else
// {
//   console.log('Someone else should Drive!! 😢');
// }

// const isTired = true;
// if(!hasDriverLicense || !hasGoodVision || isTired)
// {
//   console.log('Sarah should be banished from driving for a temporary basis. 😊');
// }

// Day-3: Switch Statement

// const day = 'sunday';

// switch(day)
// {
//   case 'monday':
//     console.log('Plan Course Structure');
//     console.log('Learn System design');
//     break;
//   case 'tuesday':
//     console.log('Learn LLD');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Practise DSA');
//     break;
//   case 'friday':
//     console.log('Learn Web Development');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Learn Web Development');
//     break;
//   default:
//     console.log('Not a valid Day');
// }

// Day-3: Statements and Expressions

// Expressions : Produces an value in JS
// 3+4
// 1991
// false && true && !false

// //Statements : does not produce an value itself.

// if(23 > 10) // Here if is a statement
// {
//   const str = '23 is bigger!!';
// }

// // Day-3: The Conditional (Ternary) Operator:

// const myAge = 2;
// myAge >= 18? console.log('Eligible to vote!!') : console.log('Maybe try after your age is atleast 18 🥹');

// const drink = myAge >= 18 ? 'Wine 🍷' : 'Water 💧';
// console.log(drink);

// console.log(`I would like to drink ${myAge >= 18 ? 'Wine 🍷' : 'Water 💧'}`);

// JS - Fundamentasl Part -2

// 'use strict'; //- to activate strict mode. this should be the first line in file.*/

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest) hasDriverLicence = true;
// if(hasDriversLicence) console.log('Hurray!1 I can drive.');

// const interface = 'Audio';

// Functions

// function logger() {
//   console.log('Hello'); // returns undefined.
// }

// logger();
// logger(23); // still works and does not give an error. Quiet a strange Language 😅

// function fruitProcessor(apples, oranges){
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(4,5));

// //Function Declaration
// console.log(calcAge1(2001)) // completely valid due to hoisting. Only works for function Declaration.

// //JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// function calcAge1(birthYear){
//   return 2025 - birthYear;
// }

// //Function Expression.
// const calcAge2 = function (birthYear){
//   return 2025 - birthYear;
// }

// console.log(calcAge2(2001));

// // Arrow Functions

// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2001, 'Yash'));

// Arrays

// const friend1 = 'Yash';
// const friend2 = 'Aman';
// const friend3 = 'Peter';

// const friends = ['Yash', 'Aman', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'; // as Only primitive values are constant
// // friends = []; - wrong as it changes the reference.
// console.log(friends);

// const firstName = 'Yash';
// const yash = [firstName, 'Garg', 2025 - 2001, 'student', friends];
// yash[4][4] = 'Random';
// console.log(yash);
// console.log(yash.length);
// console.log(yash[4][4]);

// // Array Methods

// const newLength = friends.push('Dhruv'); // Adds the elemnet at the end.
// console.log(friends);
// console.log(friends.length);

// friends.unshift('Minhal'); // Adds the element at the front.
// console.log(friends);

// const removedElement = friends.pop(); // Removes the last element.
// console.log(removedElement);
// console.log(friends);

// const removeFirstElement = friends.shift(); // removes the first element.
// console.log(removeFirstElement);
// console.log(friends);

// console.log(friends.indexOf('Jay')); //returns the index of the element. -1 if the element is not present.

// console.log(friends.includes('Jay')); // returns true if the elemnet is present, else false.

// friends.push(23);
// console.log(friends.includes('23')); // returns false as it tests it with strict equality and does not perform the type conversion.

// 'use strict';

// const yash = {
//   firstName: 'Yash',
//   lastName: 'Garg',
//   age: 2025-2001,
//   birthYear: 2001,
//   job: 'learner',
//   friends:['Minhal', 'Aman', 'Divyashree'],
//   hasDriverLicense: true,

//   calcAge: function(){
//     return 2025 - this.birthYear;
//   }
// };

// console.log(yash);

// console.log(yash.lastName);
// console.log(yash['lastName']);

// const nameKey = 'Name';
// console.log(yash['first' + nameKey]);
// console.log(yash['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Yash? choose between firstName, lastName, age, job and friends');

// if(yash[interestedIn])
// {
//   console.log(yash[interestedIn]);
// }
// else
// {
//   console.log('Wrong Request!!!');
// }

// yash.location = 'Ireland';
// yash['Linkedin'] = 'yashgarg5000';
// console.log(yash);

// console.log(`${yash.firstName} has ${yash.friends.length} friends, and his best friends is ${yash.friends[2]}`);

// console.log(yash.calcAge());
// console.log(yash['calcAge']());

// const x = 23;
// debugger;
// console.log(x);

// function printForecast(arr) {
//   let forecast = "";
//   for (let index = 1; index <= arr.length; index++) {
//     forecast += `... ${arr[index - 1]}°C in ${index} days `;
//   }
//   console.log(forecast + "...");
// }

// printForecast([17, 21, 23]);

function findingsOfTheWeek(arr) {
  let totalHoursWorkedInWeek = 0;
  let mostHoursWorked = 0;
  let noOfDaysWorked = 0;

  for (let index = 0; index < arr.length; index++) {
    totalHoursWorkedInWeek += arr[index];
    if (arr[index] > 0) {
      noOfDaysWorked++;
    }
    if (arr[index] > arr[mostHoursWorked]) {
      mostHoursWorked = index;
    }
  }

  const weekSummary = {
    totalHoursWorked: totalHoursWorkedInWeek,
    averageDailyHours: totalHoursWorkedInWeek / 7,
    dayWithMostHoursWorked: mostHoursWorked + 1,
    totalDaysWorked: noOfDaysWorked,
    WasFullTimeWeek: totalHoursWorkedInWeek >= 35 ? true : false,
  };

  return weekSummary;
}

console.log(findingsOfTheWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));
