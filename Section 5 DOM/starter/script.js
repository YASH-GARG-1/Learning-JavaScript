'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score').textContent =
//   document.querySelector('.score').textContent - 1;

// document.querySelector('.guess').value = 23; // as it is an input field.
let highestScore = 0;
let numberToGuess = getRandomNumber();

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

let guessesLeft = 20;

// console.log(numberToGuess); // comment later

document.querySelector('.again').addEventListener('click', function () {
  guessesLeft = 20;
  numberToGuess = getRandomNumber();
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // console.log(numberToGuess);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Entered!!';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      '⛔ Enter a Number in the range 1 to 20!!';
  } else if (guess === numberToGuess) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = numberToGuess;
    if (guessesLeft > highestScore) {
      highestScore = guessesLeft;
    }
  } else if (guess < numberToGuess) {
    document.querySelector('.message').textContent = '📉 Too Low!!';
    guessesLeft--;
  } else {
    document.querySelector('.message').textContent = '📈 Too High!!';
    guessesLeft--;
  }
  document.querySelector('.highscore').textContent = highestScore;
  document.querySelector('.score').textContent = guessesLeft;
});
