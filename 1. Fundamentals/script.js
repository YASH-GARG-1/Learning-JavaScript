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


// Day-3: Sattements and Expressions