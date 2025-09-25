'use strict';

let player1Score = 0;
let player2Score = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let dice = 0;
let currentActivePlayer = 'Player1';
let gameWon = false;

const imageSrc = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

let rolldiceBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newGameBtn = document.querySelector('.btn--new');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let main = document.querySelector('main');
let image = document.querySelector('.dice');
image.remove();

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  image.src = imageSrc[dice - 1];
  main.appendChild(image);
}

function switchPlayer() {
  if (currentActivePlayer === 'Player1') {
    currentActivePlayer = 'Player2';
    player2.classList.add('player--active');
    player1.classList.remove('player--active');
  } else {
    currentActivePlayer = 'Player1';
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
}

function setCurrentScoreZero() {
  if (currentActivePlayer === 'Player1') {
    player1CurrentScore = 0;
  } else {
    player2CurrentScore = 0;
  }
  updateScores();
}

function updateScores() {
  document.querySelector('#current--0').textContent = player1CurrentScore;
  document.querySelector('#current--1').textContent = player2CurrentScore;
  document.querySelector('#score--0').textContent = player1Score;
  document.querySelector('#score--1').textContent = player2Score;
}

rolldiceBtn.addEventListener('click', function () {
  if (gameWon) {
    return;
  }
  rollDice();
  if (dice === 1) {
    setCurrentScoreZero();
    switchPlayer();
  } else {
    if (currentActivePlayer === 'Player1') {
      player1CurrentScore += dice;
    } else {
      player2CurrentScore += dice;
    }
    updateScores();
  }
});

newGameBtn.addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  if (currentActivePlayer === 'Player2') {
    switchPlayer();
  }
  updateScores();
  image.remove();
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  gameWon = false;
});

holdBtn.addEventListener('click', function () {
  if (gameWon) {
    return;
  }
  if (currentActivePlayer === 'Player1') {
    player1Score += player1CurrentScore;
    if (player1Score >= 100) {
      gameWon = true;
      player1.classList.add('player--winner');
      image.remove();
    }
  } else {
    player2Score += player2CurrentScore;
    if (player2Score >= 100) {
      gameWon = true;
      player2.classList.add('player--winner');
      image.remove();
    }
  }
  if (!gameWon) {
    setCurrentScoreZero();
    switchPlayer();
  }
});
