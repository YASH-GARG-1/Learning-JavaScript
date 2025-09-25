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

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  guessesLeft = 20;
  numberToGuess = getRandomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = guessesLeft;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // console.log(numberToGuess);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guessesLeft < 1) {
    displayMessage('😟 You lost the Game!!!');
  } else if (!guess) {
    displayMessage('⛔ No Number Entered!!');
  } else if (guess > 20 || guess < 1) {
    displayMessage('⛔ Enter a Number in the range 1 to 20!!');
  } else if (guess === numberToGuess) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = numberToGuess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (guessesLeft > highestScore) {
      highestScore = guessesLeft;
    }
  } else if (guess < numberToGuess) {
    displayMessage('📉 Too Low!!');
    guessesLeft--;
  } else {
    displayMessage('📈 Too High!!');
    guessesLeft--;
  }
  document.querySelector('.highscore').textContent = highestScore;
  document.querySelector('.score').textContent = guessesLeft;
});
