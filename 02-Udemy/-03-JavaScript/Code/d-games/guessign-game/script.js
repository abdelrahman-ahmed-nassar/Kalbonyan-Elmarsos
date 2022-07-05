'use strict';
let secretNumber = Math.trunc(Math.random() * 6) + 1;
// because the random function produce a decimal number
let score = 6;
// will be the numbers of guesses
let highScore = 0;

// helper function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// add the check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // we use matching condition
  if (!guess) {
    // when there is no input
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    // when player when
    displayMessage('🎉 Correct Number!');

    document.querySelector('.heading').textContent = 'You won the Game 🎉';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } // when enter a wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💥 You lost the game!');
    }
  }
});

// add the play agin functionality

document.querySelector('.again').addEventListener('click', function () {
  // reset the values
  score = 6;
  secretNumber = Math.trunc(Math.random() * 6) + 1;

  document.querySelector('.heading').textContent = 'Guess My Number!';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
